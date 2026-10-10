import React from "react";
import { motion } from "framer-motion";

const IconoSobre = () => {
  return (
    <motion.svg
      viewBox="0 0 120 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-24 w-32 text-[#6F7652] sm:h-28 sm:w-40"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      aria-hidden="true"
    >
      {/* Sobre */}
      <rect
        x="8"
        y="24"
        width="104"
        height="58"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M10 27L60 64L110 27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M10 79L45 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M110 79L75 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Corazón */}
      <motion.path
        d="M60 19C55 12 43 15 43 24C43 33 60 43 60 43C60 43 77 33 77 24C77 15 65 12 60 19Z"
        fill="#E8DDC8"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ y: 8, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      />
    </motion.svg>
  );
};

const RamaDecorativa = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 160 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M22 210C44 163 75 130 103 98C125 73 140 44 145 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M48 167C28 160 17 146 14 128C33 132 46 145 48 167Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M68 143C82 125 98 119 116 121C107 139 92 146 68 143Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M87 119C69 109 61 95 63 77C80 85 89 99 87 119Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M108 91C122 73 137 68 153 71C143 88 128 94 108 91Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M125 64C110 53 105 39 109 24C124 34 131 47 125 64Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
};

const LluviaDeSobres = () => {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-[#E8DDC8] px-5 py-20 sm:px-8 md:py-28">
      {/* Decoración floral */}
      <RamaDecorativa className="pointer-events-none absolute -left-10 -top-12 w-44 rotate-[-12deg] text-[#6F7652]/35 sm:w-56" />

      <RamaDecorativa className="pointer-events-none absolute -bottom-14 -right-10 w-44 rotate-[168deg] text-[#6F7652]/35 sm:w-56" />

      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-full max-w-3xl border border-[#6F7652]/30 bg-[#F8F4EC] px-6 py-14 text-center shadow-[0_18px_45px_rgba(67,71,48,0.12)] sm:px-12 sm:py-16 md:px-16"
      >
        {/* Texto pequeño */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          whileInView={{
            opacity: 1,
            letterSpacing: "0.24em",
          }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase text-[#6F7652]/75 sm:text-sm"
        >
          Detalles de boda
        </motion.p>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-5 font-playfair text-4xl font-normal text-[#6F7652] sm:text-5xl md:text-6xl"
        >
          Lluvia de sobres
        </motion.h2>

        {/* Separador */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "8rem" }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-7 flex items-center justify-center"
        >
          <span className="h-px flex-1 bg-[#6F7652]/50" />

          <span className="mx-3 block h-2 w-2 rotate-45 border border-[#6F7652]/70" />

          <span className="h-px flex-1 bg-[#6F7652]/50" />
        </motion.div>

        {/* Sobre */}
        <div className="mt-9 flex justify-center">
          <IconoSobre />
        </div>

        {/* Mensaje */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-xl font-playfair text-xl leading-relaxed text-[#343628] sm:text-2xl"
        >
          Su presencia es nuestro mejor regalo.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#6F7652] sm:text-lg"
        >
          Si desean tener un detalle con nosotros, contaremos con lluvia
          de sobres.
        </motion.p>

        {/* Explicación */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-9 max-w-lg border-t border-[#6F7652]/25 pt-7"
        >
          <p className="text-sm italic leading-relaxed text-[#343628]/75">
            La lluvia de sobres es la tradición de obsequiar a los novios
            un presente en efectivo dentro de un sobre el día del evento.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LluviaDeSobres;