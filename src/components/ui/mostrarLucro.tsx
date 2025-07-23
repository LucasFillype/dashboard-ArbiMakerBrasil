"use client"

import React, { useState } from "react";
import { DollarSign} from "lucide-react";

export function MostrarLucro() {
  const [mostrarLucro, setMostrarLucro] = useState(false);
  const [lucro, setLucro] = useState<number>(150); // simulado

  return (
    <div>
      <button onClick={() => setMostrarLucro(true)} className="flex flex-row items-center gap-2 border border-zinc-700 text-white py-2 px-3 rounded transition-transform duration-300 ease-in-out hover:-translate-y-2 ">
        <DollarSign className="ml-auto w-4 h-5 text-zinc-300" /> Lucro do dia
      </button>

      {mostrarLucro && (
        <p className=" text-green-500 font-semibold ">
           R$ {lucro.toFixed(2)}
        </p>
      )}
    </div>
  );
}
