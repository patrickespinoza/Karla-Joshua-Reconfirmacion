
import React from "react";
import { motion } from "framer-motion";
import { Heart, CalendarDays } from "lucide-react";

const COLORS = {
  verdeOlivo: "#6F7652",
  blanco: "#FFFFFF",
  beige: "#E8DDC8",
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AvisoReconfirmacion() {
  return (
    <section
      id="aviso-reconfirmacion"
      className="
        relative w-full overflow-hidden
        bg-[#6F7652]
        px-5 py-20
        text-white
        sm:px-8 md:py-28
      "
    >
      {/* Decoraciones de fondo */}
      <div
        className="
          pointer-events-none absolute
          -left-24 top-16
          h-72 w-72 rounded-full
          border border-white/10
        "
      />

      <div
        className="
          pointer-events-none absolute
          -right-28 bottom-16
          h-80 w-80 rounded-full
          border border-white/10
        "
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="
          relative z-10 mx-auto
          max-w-2xl text-center
        "
      >
        {/* Corazón decorativo */}
        <div
          className="
            mx-auto flex h-16 w-16
            items-center justify-center
            rounded-full
            border border-white/40
          "
        >
          <Heart
            size={29}
            strokeWidth={1.4}
            className="text-white"
          />
        </div>


        {/* Título */}
        <h2
          className="
            mt-5 font-playfair
            text-4xl font-normal
            leading-tight text-white
            sm:text-5xl md:text-6xl
          "
        >
          ¡Ya falta poco
          <br />
          para la boda!
        </h2>

        {/* Separador */}
        <div
          className="
            mx-auto mt-8 flex
            max-w-xs items-center gap-4
          "
        >
          <span className="h-px flex-1 bg-white/45" />

          <Heart
            size={18}
            strokeWidth={1.2}
            className="text-[#E8DDC8]"
          />

          <span className="h-px flex-1 bg-white/45" />
        </div>

        {/* Introducción */}
        <p
          className="
            mx-auto mt-9 max-w-xl
            text-base leading-[2]
            text-white/90
            sm:text-lg
          "
        >
          Nuestro gran día está cada vez más cerca
          y nos llena de ilusión poder compartir
          este momento tan especial contigo.
        </p>

        <p
          className="
            mx-auto mt-6 max-w-xl
            text-base leading-[2]
            text-white/85
            sm:text-lg
          "
        >
          Para ayudarnos a organizar cada detalle
          de nuestra celebración, nos gustaría
          reconfirmar tu asistencia.
        </p>

        {/* Fecha límite destacada */}
        <div
          className="
            mx-auto mt-10 max-w-md
            border border-[#E8DDC8]/60
            bg-white/5
            px-6 py-9
            sm:px-10
          "
        >
          <CalendarDays
            size={27}
            strokeWidth={1.3}
            className="mx-auto text-[#E8DDC8]"
          />

          <p
            className="
              mt-5 text-xs font-semibold
              uppercase tracking-[0.24em]
              text-white/80
            "
          >
            Fecha límite para confirmar
          </p>

          <h3
            className="
              mt-4 font-playfair
              text-3xl font-normal
              text-[#E8DDC8]
              sm:text-4xl
            "
          >
            20 de Noviembre
          </h3>

          <div
            className="
              mx-auto mt-5 h-px
              w-16 bg-[#E8DDC8]/60
            "
          />

          <p
            className="
              mt-5 text-sm leading-relaxed
              text-white/85 sm:text-base
            "
          >
            Te agradeceríamos mucho que
            confirmaras tu asistencia antes
            de esta fecha mediante el
            formulario que encontrarás abajo.
          </p>
        </div>

        {/* Mensaje de comprensión */}
        <p
          className="
            mx-auto mt-10 max-w-xl
            text-base leading-[2]
            text-white/85
            sm:text-lg
          "
        >
          Si por alguna razón tus planes han
          cambiado y ya no puedes acompañarnos,
          no hay ningún problema.
          Solo te pedimos que nos lo hagas saber
          para poder organizar adecuadamente
          los lugares.
        </p>

        {/* Agradecimiento */}
        <p
          className="
            mt-10 font-playfair
            text-2xl italic
            text-[#E8DDC8]
            sm:text-3xl
          "
        >
          ¡Muchas gracias!
        </p>

        <p
          className="
            mx-auto mt-4 max-w-md
            text-sm leading-relaxed
            text-white/70
          "
        >
          Gracias por ser parte de nuestra historia
          y de este día tan importante.
        </p>

        {/* Detalle inferior */}
        <div
          className="
            mx-auto mt-10 flex
            items-center justify-center
            gap-3
          "
        >
          <span className="h-px w-12 bg-white/35" />

          <Heart
            size={15}
            strokeWidth={1.2}
            className="text-[#E8DDC8]"
          />

          <span className="h-px w-12 bg-white/35" />
        </div>
      </motion.div>
    </section>
  );
}
