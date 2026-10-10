
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const COLORS = {
  blanco: "#FFFFFF",
  verdeOlivo: "#6F7652",
  beige: "#E8DDC8",
  texto: "#454B37",
};

// 5 de diciembre de 2026
const FECHA_BODA = "2026-12-05T00:00:00-06:00";

const calcularTiempo = (fecha) => {
  const diferencia = new Date(fecha).getTime() - Date.now();

  if (isNaN(diferencia) || diferencia <= 0) {
    return {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    };
  }

  return {
    dias: Math.floor(diferencia / 86400000),
    horas: Math.floor((diferencia / 3600000) % 24),
    minutos: Math.floor((diferencia / 60000) % 60),
    segundos: Math.floor((diferencia / 1000) % 60),
  };
};

export default function Countdown({
  targetDate = FECHA_BODA,
}) {
  const [tiempo, setTiempo] = useState(() =>
    calcularTiempo(targetDate)
  );

  useEffect(() => {
    setTiempo(calcularTiempo(targetDate));

    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo(targetDate));
    }, 1000);

    return () => clearInterval(intervalo);
  }, [targetDate]);

  const terminado =
    new Date(targetDate).getTime() <= Date.now();

  return (
    <section
      id="cuenta-regresiva"
      className="
        relative w-full overflow-hidden
        bg-white px-4 py-20
        sm:px-8 md:py-28
      "
    >
      {/* Marco decorativo */}
      <div
        className="
          pointer-events-none absolute
          inset-4 border
          border-[#E8DDC8]/70
          sm:inset-7
        "
      />

      <div
        className="
          pointer-events-none absolute
          inset-[22px] border
          border-[#E8DDC8]/30
          sm:inset-[36px]
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="
          relative z-10 mx-auto
          max-w-3xl text-center
        "
      >

        <div
          className="
            mx-auto mt-7 flex
            items-center justify-center
            gap-4
          "
        >
          <span className="h-px w-14 bg-[#E8DDC8]" />

          <Heart
            size={19}
            strokeWidth={1.2}
            className="text-[#6F7652]"
          />

          <span className="h-px w-14 bg-[#E8DDC8]" />
        </div>

        {/* Título */}
        <h2
          className="
            mt-8 font-playfair
            text-3xl font-normal
            leading-tight text-[#454B37]
            sm:text-4xl md:text-5xl
          "
        >
          Cuenta regresiva
        </h2>

        <p
          className="
            mx-auto mt-5 max-w-md
            text-sm leading-relaxed
            text-[#6F7652]
            sm:text-base
          "
        >
          Cada día estamos más cerca de vivir
          uno de los momentos más especiales
          de nuestra historia.
        </p>

        {/* Contador */}
        <div
          className="
            mx-auto mt-12 grid
            max-w-xl grid-cols-4
            items-center
          "
        >
          {Object.entries(tiempo).map(
            ([unidad, valor], index) => (
              <div
                key={unidad}
                className={`
                  flex min-w-0 flex-col
                  items-center justify-center
                  px-1 py-3
                  sm:px-4
                  ${
                    index !== 3
                      ? "border-r border-[#E8DDC8]"
                      : ""
                  }
                `}
              >
                <span
                  className="
                    font-playfair
                    text-3xl font-normal
                    tabular-nums
                    text-[#6F7652]
                    sm:text-5xl md:text-6xl
                  "
                >
                  {String(valor).padStart(2, "0")}
                </span>

                <span
                  className="
                    mt-4 text-[9px]
                    font-medium uppercase
                    tracking-[0.12em]
                    text-[#454B37]
                    sm:text-xs
                    sm:tracking-[0.2em]
                  "
                >
                  {unidad}
                </span>
              </div>
            )
          )}
        </div>

        {/* Fecha */}
        <div
          className="
            mx-auto mt-12
            flex max-w-sm
            items-center justify-center
            gap-4
          "
        >
        </div>

        {/* Mensaje final */}
        <p
          className="
            mt-8 font-playfair
            text-xl italic
            text-[#6F7652]
            sm:text-2xl
          "
        >
          {terminado
            ? "¡Llegó nuestro gran día!"
            : "¡El gran día se acerca!"}
        </p>
      </motion.div>
    </section>
  );
}
