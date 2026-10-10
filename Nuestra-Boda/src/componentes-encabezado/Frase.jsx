import React from "react";
import { motion } from "framer-motion";

const Rama = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 180 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 82C48 76 85 58 121 29C137 17 151 11 171 8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M42 70C25 65 18 53 17 40C33 43 43 53 42 70Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M64 61C71 45 83 37 98 36C93 51 81 60 64 61Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M91 47C77 40 71 29 73 17C87 23 94 33 91 47Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M119 30C127 17 138 12 151 14C144 27 134 32 119 30Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <circle
        cx="171"
        cy="8"
        r="4"
        fill="currentColor"
        fillOpacity="0.35"
      />
    </svg>
  );
};

const SeparadorFrase = () => {
  return (
    <section className="relative flex min-h-[470px] w-full items-center justify-center overflow-hidden bg-[#6F7652] px-6 py-24 text-white sm:min-h-[540px] sm:px-10 md:py-32">
      {/* Decoraciones florales */}
      <Rama className="pointer-events-none absolute -left-8 top-5 w-48 rotate-[-12deg] text-white/25 sm:w-64 md:w-72" />

      <Rama className="pointer-events-none absolute -bottom-1 -right-8 w-48 rotate-[168deg] text-white/25 sm:w-64 md:w-72" />

      {/* Círculos decorativos */}
      <div className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -right-28 top-8 h-72 w-72 rounded-full border border-white/10" />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="relative z-10 mx-auto w-full max-w-4xl text-center"
      >
        {/* Adorno superior */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
          }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-xs items-center gap-4"
        >
          <span className="h-px flex-1 bg-white/55" />

          <svg
            viewBox="0 0 32 32"
            fill="none"
            className="h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M16 29V8M16 19C9.5 19 6 14.5 5 9C11 9.5 15 13 16 19ZM16 14C21.5 14 26 10.5 27 5C21 5.5 17 9 16 14Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="h-px flex-1 bg-white/55" />
        </motion.div>

        {/* Comillas */}
        <motion.span
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="mt-8 block font-playfair text-7xl leading-none text-white/35 sm:text-8xl"
        >
          “
        </motion.span>

        {/* Frase */}
        <motion.blockquote
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="-mt-5 font-playfair text-2xl font-normal leading-relaxed text-white sm:text-3xl md:text-4xl md:leading-relaxed"
        >
          Uno solo puede ser vencido, pero dos pueden resistir.
          <span className="mt-3 block">
            ¡La cuerda de tres hilos no se rompe fácilmente!
          </span>
        </motion.blockquote>

        {/* Línea */}
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: "5rem",
          }}
          transition={{
            duration: 1,
            delay: 0.7,
          }}
          viewport={{ once: true }}
          className="mx-auto mt-10 h-px bg-white/65"
        />

        {/* Referencia bíblica */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.85,
          }}
          viewport={{ once: true }}
          className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-white sm:text-sm"
        >
          Eclesiastés 4:12
        </motion.p>
      </motion.div>
    </section>
  );
};

export default SeparadorFrase;