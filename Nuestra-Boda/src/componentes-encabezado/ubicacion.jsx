import React from "react";

const IconoIglesia = () => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-14 w-14"
      aria-hidden="true"
    >
      <path
        d="M32 6V18M26 11H38M19 58V31L32 20L45 31V58M11 58H53M27 58V43C27 40.2 29.2 38 32 38C34.8 38 37 40.2 37 43V58M24 32H40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="32"
        cy="30"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

const IconoCopas = () => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-14 w-14"
      aria-hidden="true"
    >
      <path
        d="M17 8H31L29 23C28.3 28.2 24.5 32 19 32C13.5 32 9.7 28.2 9 23L7 8H17ZM19 32V50M12 56H26M19 50V56"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M40 8H54L56 23C56.7 28.2 52.9 32 47 32C41.1 32 37.3 28.2 38 23L40 8ZM47 32V50M40 56H54M47 50V56"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Celebracion = () => {
  const ubicacionCeremonia =
    "https://maps.app.goo.gl/gSMfaMEdYS3ZUQUB9";

  const ubicacionRecepcion =
    "https://maps.app.goo.gl/MNnK9MYj7pFvms6q7";

  return (
    <section className="relative w-full overflow-hidden bg-[#6F7652] px-5 py-20 text-white sm:px-8 md:py-28">
      {/* Decoraciones de fondo */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -right-28 bottom-16 h-80 w-80 rounded-full border border-white/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Encabezado */}
        <div className="text-center">
          <p className="text-xl font-semibold uppercase tracking-[0.35em] text-white/75 sm:text-sm">
            Celebremos juntos
          </p>

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
        </div>

        {/* Fecha */}
        <div className="mt-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/80 sm:text-base">
            Sábado
          </p>

          <p className="mt-2 font-playfair text-7xl leading-none text-white sm:text-8xl md:text-9xl">
            05
          </p>

          <p className="mt-4 font-playfair text-xl uppercase tracking-[0.2em] text-white sm:text-2xl">
            Diciembre 2026
          </p>
        </div>

        {/* Eventos */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Ceremonia religiosa */}
          <article className="flex h-full flex-col items-center border border-white/35 bg-white/[0.07] px-6 py-10 text-center backdrop-blur-[2px] sm:px-10 sm:py-12">
            <div className="text-white">
              <IconoIglesia />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Ceremonia religiosa
            </p>

            <h3 className="mt-4 font-playfair text-3xl text-white sm:text-4xl">
              Parroquia Nuestra Señora de Fátima
            </h3>

            <div className="my-7 h-px w-20 bg-white/50" />

            <p className="text-xs uppercase tracking-[0.25em] text-white/70">
              Hora
            </p>

            <p className="mt-2 font-playfair text-3xl text-white">
              05:00 PM
            </p>

            <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/80 sm:text-base">
             79310, Av. Jorge Pasquel 105, Centro, El Naranjo, S.L.P.
            </p>

            <a
              href={ubicacionCeremonia}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center border border-white bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#6F7652] transition duration-300 hover:-translate-y-1 hover:bg-[#E8DDC8] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6F7652]"
            >
              Ver ubicación
            </a>
          </article>

          {/* Recepción */}
          <article className="flex h-full flex-col items-center border border-white/35 bg-white/[0.07] px-6 py-10 text-center backdrop-blur-[2px] sm:px-10 sm:py-12">
            <div className="text-white">
              <IconoCopas />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Recepción
            </p>

            <h3 className="mt-4 font-playfair text-3xl text-white sm:text-4xl">
              Después de la misa
            </h3>

            <div className="my-7 h-px w-20 bg-white/50" />

            <p className="text-xs uppercase tracking-[0.25em] text-white/70">
              Dirección
            </p>

            <p className="mt-3 max-w-md font-playfair text-xl leading-relaxed text-white sm:text-2xl">
              Carlos Sarabia #44
            </p>

            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
              Col. La Encantada, 79305
              <br />
              El Naranjo, S.L.P.
            </p>

            <a
              href={ubicacionRecepcion}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center border border-white bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#6F7652] transition duration-300 hover:-translate-y-1 hover:bg-[#E8DDC8] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6F7652]"
            >
              Ver ubicación
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Celebracion;