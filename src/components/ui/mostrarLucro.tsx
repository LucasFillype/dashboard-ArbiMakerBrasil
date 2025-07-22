"use client"

import React, { useState } from "react";

export function MostrarLucro() {
  const [mostrarLucro, setMostrarLucro] = useState(false);
  const [lucro, setLucro] = useState<number>(150); // simulado

  return (
    <div>
      <button onClick={() => setMostrarLucro(true)} className="border border-zinc-700 text-white py-2 px-3 rounded transition-transform duration-300 ease-in-out hover:-translate-y-2 ">
        Lucro do dia
      </button>

      {mostrarLucro && (
        <p className=" text-orange-500 font-semibold ">
          Lucro: R$ {lucro.toFixed(2)}
        </p>
      )}
    </div>
  );
}
