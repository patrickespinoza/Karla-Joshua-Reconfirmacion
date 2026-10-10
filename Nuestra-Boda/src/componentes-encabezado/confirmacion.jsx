import React, { useState } from "react";
import {
  Check,
  Heart,
  MessageCircle,
  Send,
  User,
  Users,
  X,
} from "lucide-react";

export default function ConfirmacionAsistencia() {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [confirmacion, setConfirmacion] = useState("");

  // Código de México + número de WhatsApp
  const WHATSAPP = "524821050329";

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmacion("");

    if (!nombre.trim()) {
      setConfirmacion("Por favor, escribe tu nombre.");
      return;
    }

    if (!asistencia) {
      setConfirmacion("Selecciona si podrás acompañarnos.");
      return;
    }

    if (asistencia === "Sí asistiré" && !invitados) {
      setConfirmacion("Indica el número de personas que asistirán.");
      return;
    }

    const cantidad =
      asistencia === "Sí asistiré"
        ? invitados
        : "No aplica";

    const mensajeWhatsApp = `Hola, soy *${nombre.trim()}*.

Quiero confirmar mi asistencia a la boda de *Karla & Joshua*.

*Asistencia:* ${asistencia}
*Número de personas:* ${cantidad}
*Mensaje para los novios:* ${
      mensaje.trim() || "Sin mensaje adicional"
    }`;

    const enlaceWhatsApp = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      mensajeWhatsApp
    )}`;

    setConfirmacion("Abriendo WhatsApp para enviar tu confirmación...");

    window.open(enlaceWhatsApp, "_blank", "noopener,noreferrer");
  };

  const seleccionarAsistencia = (respuesta) => {
    setAsistencia(respuesta);
    setConfirmacion("");

    if (respuesta === "No asistiré") {
      setInvitados("");
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#6F7652] px-5 py-20 text-white sm:px-8 md:py-28">
      {/* Decoraciones de fondo */}
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -right-28 bottom-16 h-80 w-80 rounded-full border border-white/10" />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        {/* Encabezado */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/40">
          <Heart
            size={29}
            strokeWidth={1.4}
            className="text-white"
          />
        </div>

        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-white/75 sm:text-sm">
          Karla & Joshua
        </p>

        <h2 className="mt-4 font-playfair text-4xl font-normal leading-tight text-white sm:text-5xl md:text-6xl">
          Confirmación de asistencia
        </h2>

        {/* Separador */}
        <div className="mx-auto mt-7 flex max-w-xs items-center gap-4">
          <span className="h-px flex-1 bg-white/45" />

          <svg
            viewBox="0 0 30 30"
            fill="none"
            className="h-7 w-7 text-white/80"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M15 27V8M15 17C9 17 6 13 5 8C10 8 14 11 15 17ZM15 13C20 13 24 10 25 5C20 5 16 8 15 13Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="h-px flex-1 bg-white/45" />
        </div>

        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Nos encantará saber si podremos contar con tu presencia en
          este día tan especial.
        </p>

        {/* Formulario */}
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
                placeholder="Escribe tu nombre y apellido"
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                  setConfirmacion("");
                }}
                className="w-full border border-white/45 bg-white/10 py-4 pl-12 pr-5 text-white outline-none transition placeholder:text-white/55 focus:border-white focus:bg-white/15"
              />
            </div>
          </div>

          {/* Asistencia */}
          <fieldset>
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

          {/* Número de asistentes */}
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
                inputMode="numeric"
                placeholder="¿Cuántas personas asistirán?"
                value={invitados}
                disabled={asistencia === "No asistiré"}
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
                onChange={(e) => setMensaje(e.target.value)}
                rows={4}
                className="w-full resize-none border border-white/45 bg-white/10 py-4 pl-12 pr-5 text-white outline-none transition placeholder:text-white/55 focus:border-white focus:bg-white/15"
              />
            </div>
          </div>

          {/* Botón de WhatsApp */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 border border-white bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#6F7652] transition duration-300 hover:-translate-y-1 hover:bg-[#E8DDC8] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6F7652]"
          >
            <Send size={20} strokeWidth={1.7} />
            Confirmar por WhatsApp
          </button>

          {/* Aviso */}
          {confirmacion && (
            <p
              role="status"
              className="border border-white/30 bg-white/10 px-5 py-4 text-center text-sm font-medium text-white"
            >
              {confirmacion}
            </p>
          )}
        </form>

        <p className="mt-7 text-center text-xs leading-relaxed text-white/60">
          Al presionar el botón se abrirá WhatsApp con tu confirmación
          preparada. Solo deberás enviarla.
        </p>
      </div>
    </section>
  );
}