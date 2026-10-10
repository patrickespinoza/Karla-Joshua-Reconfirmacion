
import React, { useState } from "react";
import {
  Check,
  Heart,
  MessageCircle,
  Send,
  User,
  Users,
  X,
  Loader2,
} from "lucide-react";

// Pega aquí la URL de tu Apps Script publicado
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzqmMgHJTr9wzi-N1bSfTyGgTSrtGfqnH3cmuufpheKbOXDhZQuM5i6O_F0C60TSPDBkw/exec";

export default function ConfirmacionAsistencia() {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [confirmacion, setConfirmacion] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const seleccionarAsistencia = (respuesta) => {
    if (enviando || enviado) return;

    setAsistencia(respuesta);
    setConfirmacion("");

    if (respuesta === "No asistiré") {
      setInvitados("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (enviando || enviado) return;

    setConfirmacion("");

    if (!nombre.trim()) {
      setConfirmacion("Por favor, escribe tu nombre.");
      return;
    }

    if (!asistencia) {
      setConfirmacion(
        "Selecciona si podrás acompañarnos."
      );
      return;
    }

    const cantidad = Number(invitados);

    if (
      asistencia === "Sí asistiré" &&
      (!Number.isInteger(cantidad) || cantidad < 1)
    ) {
      setConfirmacion(
        "Indica el número de personas que asistirán."
      );
      return;
    }

    if (
      !SCRIPT_URL.startsWith("https://script.google.com/")
    ) {
      setConfirmacion(
        "La conexión con el registro aún no está configurada."
      );
      return;
    }

    setEnviando(true);

    const datos = {
      nombre: nombre.trim(),
      asistencia,
      invitados:
        asistencia === "Sí asistiré" ? cantidad : 0,
      mensaje: mensaje.trim(),
    };

    try {
      // Envío compatible con Apps Script.
      // El servidor debe devolver JSON con success: true.
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(datos),
      });

      if (!response.ok) {
        throw new Error("Error de conexión");
      }

      const resultado = await response.json();

      if (resultado.success !== true) {
        throw new Error(
          resultado.message || "No se pudo guardar."
        );
      }

      setEnviado(true);
      setConfirmacion("");
    } catch (error) {
      console.error("Error al confirmar:", error);

      setConfirmacion(
        "No pudimos guardar tu respuesta. Inténtalo nuevamente."
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section
      id="confirmacion"
      className="
        relative w-full overflow-hidden
        bg-[#6F7652] px-5 py-20
        text-white sm:px-8 md:py-28
      "
    >
      {/* Decoraciones */}
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-28 bottom-16 h-80 w-80 rounded-full border border-white/10" />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        {/* Corazón */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/40">
          <Heart
            size={29}
            strokeWidth={1.4}
            className="text-white"
          />
        </div>

        <h2 className="mt-7 font-playfair text-4xl font-normal leading-tight text-white sm:text-5xl md:text-6xl">
          Confirmación de asistencia
        </h2>

        {/* Separador */}
        <div className="mx-auto mt-7 flex max-w-xs items-center gap-4">
          <span className="h-px flex-1 bg-white/45" />
          <Heart
            size={20}
            strokeWidth={1.2}
            className="text-[#E8DDC8]"
          />
          <span className="h-px flex-1 bg-white/45" />
        </div>

        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Nos encantará saber si podremos contar
          nuevamente con tu presencia en este día
          tan especial.
        </p>

        {enviado ? (
          <div
            role="status"
            className="mt-12 border border-white/40 bg-white/10 px-6 py-12"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#E8DDC8]">
              <Check
                size={30}
                strokeWidth={1.5}
                className="text-[#E8DDC8]"
              />
            </div>

            <h3 className="mt-7 font-playfair text-3xl text-white">
              ¡Muchas gracias!
            </h3>

            <p className="mt-5 text-base leading-relaxed text-white/85">
              Tu reconfirmación ha sido registrada
              correctamente.
            </p>

            <p className="mt-4 font-playfair text-xl italic text-[#E8DDC8]">
              Karla & Joshua
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-6 text-left"
          >
            {/* Nombre */}
            <div>
              <label
                htmlFor="nombre"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white"
              >
                Nombre completo
              </label>

              <div className="relative">
                <User
                  size={20}
                  strokeWidth={1.5}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/70"
                />

                <input
                  id="nombre"
                  type="text"
                  maxLength={100}
                  placeholder="Escribe tu nombre y apellido"
                  value={nombre}
                  disabled={enviando}
                  onChange={(e) => {
                    setNombre(e.target.value);
                    setConfirmacion("");
                  }}
                  className="w-full border border-white/45 bg-white/10 py-4 pl-12 pr-5 text-white outline-none transition placeholder:text-white/55 focus:border-white focus:bg-white/15"
                />
              </div>
            </div>

            {/* Asistencia */}
            <fieldset disabled={enviando}>
              <legend className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-white">
                ¿Podrás acompañarnos?
              </legend>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() =>
                    seleccionarAsistencia("Sí asistiré")
                  }
                  aria-pressed={asistencia === "Sí asistiré"}
                  className={`flex items-center justify-center gap-3 border px-5 py-4 font-medium transition duration-300 ${
                    asistencia === "Sí asistiré"
                      ? "border-white bg-white text-[#6F7652]"
                      : "border-white/45 bg-white/5 text-white hover:border-white hover:bg-white/10"
                  }`}
                >
                  <Check size={20} strokeWidth={1.7} />
                  Sí asistiré
                </button>

                <button
                  type="button"
                  onClick={() =>
                    seleccionarAsistencia("No asistiré")
                  }
                  aria-pressed={asistencia === "No asistiré"}
                  className={`flex items-center justify-center gap-3 border px-5 py-4 font-medium transition duration-300 ${
                    asistencia === "No asistiré"
                      ? "border-white bg-white text-[#6F7652]"
                      : "border-white/45 bg-white/5 text-white hover:border-white hover:bg-white/10"
                  }`}
                >
                  <X size={20} strokeWidth={1.7} />
                  No asistiré
                </button>
              </div>
            </fieldset>

            {/* Número de personas */}
            <div
              className={`transition duration-300 ${
                asistencia === "No asistiré"
                  ? "pointer-events-none opacity-40"
                  : "opacity-100"
              }`}
            >
              <label
                htmlFor="invitados"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white"
              >
                Número de personas
              </label>

              <div className="relative">
                <Users
                  size={20}
                  strokeWidth={1.5}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/70"
                />

                <input
                  id="invitados"
                  type="number"
                  min="1"
                  step="1"
                  inputMode="numeric"
                  placeholder="¿Cuántas personas asistirán?"
                  value={invitados}
                  disabled={
                    asistencia === "No asistiré" || enviando
                  }
                  onChange={(e) => {
                    setInvitados(e.target.value);
                    setConfirmacion("");
                  }}
                  className="w-full border border-white/45 bg-white/10 py-4 pl-12 pr-5 text-white outline-none transition placeholder:text-white/55 focus:border-white focus:bg-white/15 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label
                htmlFor="mensaje"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white"
              >
                Mensaje para los novios
              </label>

              <div className="relative">
                <MessageCircle
                  size={20}
                  strokeWidth={1.5}
                  className="pointer-events-none absolute left-4 top-5 text-white/70"
                />

                <textarea
                  id="mensaje"
                  placeholder="Escribe un mensaje especial"
                  value={mensaje}
                  disabled={enviando}
                  onChange={(e) =>
                    setMensaje(e.target.value)
                  }
                  rows={4}
                  maxLength={1000}
                  className="w-full resize-none border border-white/45 bg-white/10 py-4 pl-12 pr-5 text-white outline-none transition placeholder:text-white/55 focus:border-white focus:bg-white/15"
                />
              </div>
            </div>

            {/* Botón */}
            <button
              type="submit"
              disabled={enviando}
              className="flex w-full items-center justify-center gap-3 border border-white bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#6F7652] transition duration-300 hover:bg-[#E8DDC8] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {enviando ? (
                <>
                  <Loader2
                    size={20}
                    className="animate-spin"
                  />
                  Guardando respuesta...
                </>
              ) : (
                <>
                  <Send size={20} strokeWidth={1.7} />
                  Enviar reconfirmación
                </>
              )}
            </button>

            {confirmacion && (
              <p
                role="alert"
                className="border border-white/30 bg-white/10 px-5 py-4 text-center text-sm font-medium text-white"
              >
                {confirmacion}
              </p>
            )}
          </form>
        )}

        <p className="mt-7 text-center text-xs leading-relaxed text-white/60">
          Tu respuesta se registrará directamente
          en nuestra lista de invitados.
        </p>
      </div>
    </section>
  );
}
