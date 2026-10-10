import React from "react";
import { motion } from "framer-motion";

/* Rama floral decorativa */
const RamaFloral = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 220 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 286C60 228 91 190 126 151C158 116 181 76 190 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M69 224C41 213 24 194 18 169C44 174 62 192 69 224Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M87 199C105 174 125 165 148 165C139 190 118 201 87 199Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M108 171C82 160 69 141 68 116C92 123 107 141 108 171Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M130 145C149 119 169 110 192 112C181 136 161 147 130 145Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M148 116C127 101 119 81 124 57C146 69 156 89 148 116Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M166 83C183 65 199 59 216 63C205 82 189 89 166 83Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="190"
        cy="20"
        r="10"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="178"
        cy="29"
        r="8"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="199"
        cy="33"
        r="8"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

const Novios = () => {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-[#E8DDC8] px-5 py-20 sm:px-8 md:py-28">
      {/* Flores exteriores */}
      <RamaFloral className="pointer-events-none absolute -left-12 -top-14 w-44 rotate-[-15deg] text-[#6F7652]/50 sm:-left-8 sm:w-56 md:w-64" />

      <RamaFloral className="pointer-events-none absolute -bottom-16 -right-12 w-44 rotate-[165deg] text-[#6F7652]/50 sm:-right-8 sm:w-56 md:w-64" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        className="relative w-full max-w-5xl overflow-hidden bg-[#F8F4EC] px-6 py-16 text-center shadow-[0_18px_50px_rgba(67,71,48,0.12)] sm:px-12 md:px-16 md:py-20"
      >
        {/* Flores interiores */}
        <RamaFloral className="pointer-events-none absolute -left-16 -top-20 w-48 rotate-[-20deg] text-[#6F7652]/20 sm:w-60" />

        <RamaFloral className="pointer-events-none absolute -bottom-20 -right-16 w-48 rotate-[160deg] text-[#6F7652]/20 sm:w-60" />

        <div className="relative z-10">
          {/* Texto superior */}
          <motion.p
            initial={{
              opacity: 0,
              letterSpacing: "0.4em",
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.22em",
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase text-[#6F7652] sm:text-sm"
          >
            Nuestra boda
          </motion.p>

          {/* Adorno */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 flex w-40 items-center gap-3"
          >
            <span className="h-px flex-1 bg-[#6F7652]/50" />

            <svg
              viewBox="0 0 30 30"
              className="h-6 w-6 text-[#6F7652]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M15 27V8M15 17C9 17 6 13 5 8C10 8 14 11 15 17ZM15 13C20 13 24 10 25 5C20 5 16 8 15 13Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="h-px flex-1 bg-[#6F7652]/50" />
          </motion.div>

          {/* Nombres */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            viewport={{ once: true }}
            className="mt-10 font-playfair text-4xl font-normal leading-tight text-[#6F7652] sm:text-5xl md:text-6xl"
          >
            Karla Paola
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="my-5 font-[DancingScript] text-4xl text-[#6F7652] sm:text-5xl"
          >
            &
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl font-normal leading-tight text-[#6F7652] sm:text-5xl md:text-6xl"
          >
            Joshua Emanuel
          </motion.h1>

          {/* Separador */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "7rem" }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 h-px bg-[#6F7652]/70"
          />

          {/* Bendición */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-9 font-[DancingScript] text-2xl leading-relaxed text-[#6F7652] sm:text-3xl"
          >
            Con la bendición de nuestros padres
          </motion.p>

          {/* Padres */}
          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2">
            {/* Padres del novio */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.85 }}
              viewport={{ once: true }}
              className="border border-[#6F7652]/30 bg-[#E8DDC8]/55 px-6 py-9"
            >
              <div className="mx-auto mb-5 flex h-9 w-9 items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  className="h-full w-full text-[#6F7652]"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M20 35V12M20 25C13 25 9 21 8 15C14 15 19 19 20 25ZM20 19C27 19 31 15 32 9C26 9 21 13 20 19Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#6F7652] sm:text-sm">
                Padres del novio
              </h2>

              <p className="font-playfair text-xl text-[#343628] sm:text-2xl">
                Gastón
              </p>

              <p className="font-playfair mt-1 text-xl text-[#343628] sm:text-2xl"> &</p>

              <p className="mt-3 font-playfair text-xl text-[#343628] sm:text-2xl">
                Martha
              </p>
            </motion.div>

            {/* Padres de la novia */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="border border-[#6F7652]/30 bg-[#E8DDC8]/55 px-6 py-9"
            >
              <div className="mx-auto mb-5 flex h-9 w-9 items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  className="h-full w-full text-[#6F7652]"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M20 35V12M20 25C13 25 9 21 8 15C14 15 19 19 20 25ZM20 19C27 19 31 15 32 9C26 9 21 13 20 19Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#6F7652] sm:text-sm">
                Padres de la novia
              </h2>

              <p className="font-playfair text-xl text-[#343628] sm:text-2xl">
                Carlos
              </p>

              <p className="font-playfair mt-1 text-xl text-[#343628] sm:text-2xl"> &</p>

              <p className="mt-3 font-playfair text-xl text-[#343628] sm:text-2xl">
                Magdalena
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Novios;