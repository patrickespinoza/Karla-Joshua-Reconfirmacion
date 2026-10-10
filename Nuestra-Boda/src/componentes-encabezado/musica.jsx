import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Music2,
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

const Musica = () => {
  const audioRef = useRef(null);

  const [mostrarModal, setMostrarModal] = useState(true);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [silenciado, setSilenciado] = useState(false);
  const [mostrarControl, setMostrarControl] = useState(false);
  const [error, setError] = useState("");

  const reproducirMusica = async () => {
    if (!audioRef.current) return;

    try {
      audioRef.current.volume = 0.6;
      audioRef.current.muted = false;

      await audioRef.current.play();

      setReproduciendo(true);
      setSilenciado(false);
      setMostrarModal(false);
      setMostrarControl(true);
      setError("");
    } catch (error) {
      console.error("No se pudo reproducir la música:", error);

      setError(
        "No fue posible reproducir la canción. Intenta nuevamente."
      );
    }
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setMostrarControl(true);
  };

  const alternarReproduccion = async () => {
    if (!audioRef.current) return;

    try {
      if (audioRef.current.paused) {
        await audioRef.current.play();
        setReproduciendo(true);
      } else {
        audioRef.current.pause();
        setReproduciendo(false);
      }

      setError("");
    } catch (error) {
      console.error("No se pudo controlar la música:", error);
    }
  };

  const alternarSilencio = () => {
    if (!audioRef.current) return;

    const nuevoEstado = !silenciado;

    audioRef.current.muted = nuevoEstado;
    setSilenciado(nuevoEstado);
  };

  return (
    <>
      {/* Canción precargada */}
      <audio
        ref={audioRef}
        src="/musica.mp3"
        preload="auto"
        loop
        onPlay={() => setReproduciendo(true)}
        onPause={() => setReproduciendo(false)}
      />

      {/* Ventana emergente */}
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/55 px-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="titulo-musica"
              className="relative w-full max-w-md overflow-hidden bg-[#F8F4EC] px-7 py-12 text-center shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:px-10 sm:py-14"
            >
              {/* Botón para cerrar */}
              <button
                type="button"
                onClick={cerrarModal}
                aria-label="Cerrar ventana"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[#6F7652] transition hover:bg-[#6F7652]/10"
              >
                <X size={22} strokeWidth={1.6} />
              </button>

              {/* Círculos decorativos */}
              <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full border border-[#6F7652]/10" />

              <div className="pointer-events-none absolute -bottom-28 -right-24 h-64 w-64 rounded-full border border-[#6F7652]/10" />

              <div className="relative z-10">
                {/* Ícono */}
                <motion.div
                  initial={{
                    opacity: 0,
                    rotate: -15,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                  }}
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#6F7652]/30 bg-[#E8DDC8]"
                >
                  <Music2
                    size={36}
                    strokeWidth={1.4}
                    className="text-[#6F7652]"
                  />
                </motion.div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-[#6F7652]/70">
                  Karla & Joshua
                </p>

                <h2
                  id="titulo-musica"
                  className="mt-4 font-playfair text-4xl font-normal leading-tight text-[#6F7652] sm:text-5xl"
                >
                  Nuestra canción
                </h2>

                {/* Separador */}
                <div className="mx-auto mt-6 flex max-w-[220px] items-center gap-3">
                  <span className="h-px flex-1 bg-[#6F7652]/40" />

                  <span className="block h-2 w-2 rotate-45 border border-[#6F7652]/60" />

                  <span className="h-px flex-1 bg-[#6F7652]/40" />
                </div>

                <p className="mx-auto mt-7 max-w-sm text-base leading-relaxed text-[#343628]/80">
                  Hemos elegido una canción especial para acompañarte
                  durante este recorrido.
                </p>

                {/* Botón principal */}
                <button
                  type="button"
                  onClick={reproducirMusica}
                  className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-[#6F7652] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#5E6648] focus:outline-none focus:ring-2 focus:ring-[#6F7652] focus:ring-offset-2"
                >
                  <Play
                    size={20}
                    strokeWidth={1.7}
                    fill="currentColor"
                  />

                  Reproducir música
                </button>

                <button
                  type="button"
                  onClick={cerrarModal}
                  className="mt-5 text-xs uppercase tracking-[0.16em] text-[#6F7652]/65 underline-offset-4 transition hover:text-[#6F7652] hover:underline"
                >
                  Continuar sin música
                </button>

                {error && (
                  <p
                    role="alert"
                    className="mt-5 text-sm font-medium text-red-700"
                  >
                    {error}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control flotante */}
      <AnimatePresence>
        {mostrarControl && !mostrarModal && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              x: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-5 right-5 z-[9998] flex items-center overflow-hidden rounded-full border border-white/30 bg-[#6F7652] shadow-[0_10px_35px_rgba(0,0,0,0.25)]"
          >
            {/* Pausar o reproducir */}
            <button
              type="button"
              onClick={alternarReproduccion}
              aria-label={
                reproduciendo
                  ? "Pausar música"
                  : "Reproducir música"
              }
              className="flex h-13 w-13 items-center justify-center p-4 text-white transition hover:bg-white/10"
            >
              {reproduciendo ? (
                <Pause
                  size={21}
                  strokeWidth={1.7}
                  fill="currentColor"
                />
              ) : (
                <Play
                  size={21}
                  strokeWidth={1.7}
                  fill="currentColor"
                />
              )}
            </button>

            <span className="h-6 w-px bg-white/25" />

            {/* Silenciar */}
            <button
              type="button"
              onClick={alternarSilencio}
              aria-label={
                silenciado
                  ? "Activar sonido"
                  : "Silenciar música"
              }
              className="flex h-13 w-13 items-center justify-center p-4 text-white transition hover:bg-white/10"
            >
              {silenciado ? (
                <VolumeX size={21} strokeWidth={1.7} />
              ) : (
                <Volume2 size={21} strokeWidth={1.7} />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Musica;