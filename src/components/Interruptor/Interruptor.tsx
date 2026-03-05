// Instrucciones:
// Crea un componente llamado Interruptor.tsx.
// Crea un estado booleano (empieza en false).
// Dibuja un botón que diga "ENCENDER" si el estado es false, y "APAGAR" si el estado es true.
// Extra con Tailwind: Cambia el color del fondo de un div de gris (bg-gray-400) a amarillo (bg-yellow-300) dependiendo de ese mismo estado.


import { useState } from "react";

import React from 'react'

const Interruptor = () => {

    const [on, setOn] = useState<boolean>(false);

  return (
    <div className={`p-4 flex flex-col items-center transition-colors duration-300 ${on ? 'bg-yellow-300' : 'bg-gray-400'}`}>
      <button className= {`px-6 py-2 rounded-full font-bold text-white ${on ? 'bg-red-500' : 'bg-blue-500'}`}  onClick={() => setOn(!on)}>
        {on ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}

export default Interruptor