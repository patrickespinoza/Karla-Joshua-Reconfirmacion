import React from "react";

export default function Portada() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src="/portada.jpg"
        alt="Karla y Joshua"
        className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
      />

      {/* Sombreado ligero solamente en la parte inferior */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/45" />

      {/* Nombres y fecha */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-6 pb-14 text-center text-white sm:pb-16 md:pb-20">
        <h1 className="font-serif text-4xl font-normal leading-tight tracking-wide drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
          Karla & Joshua
        </h1>

        <div className="my-4 h-px w-20 bg-white/80 sm:w-24" />

        <p className="font-serif text-base uppercase tracking-[0.22em] drop-shadow-md sm:text-lg md:text-xl">
          5 de diciembre de 2026
        </p>
      </div>
    </section>
  );
}