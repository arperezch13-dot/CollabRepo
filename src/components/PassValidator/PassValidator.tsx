import { useState } from "react";

import React from 'react'

const PassValidator = () => {

    const [password, setPassword] = useState<string>('')

  return (
    <div className="p-6 max-w-md mx-auto bg-slate-800 text-white rounded-lg shadow-2xl space-y-4"> 

        <label className= 'block text-sm font-semibold'>
        Crae tu Contraseña:
        </label>
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="w-full p-2 rounded bg-slate-700 border border-slate-600 focus:border-cyan-400 outine-none"/>

        {/* RENDERIZADO CONDICIONAL CON && ESTO SE MUERTA SI LA CONDICIÓM ES TRUE*/}

              {password.length > 0 && password.length < 8 && (
            <div className="flex items-center p-3 text-sm text-red-400 bg-red-900/30 rounded border border-red-500/50">
                <span className="mr-2">⚠️</span>
                La contraseña es demasiado corta (Minimo 8 Caracteres)
            </div>
        )}

        {/* MOSTRAMOS UN CHECK PARA INDICAR QUE ES SEGURA */}
        { password.length >= 8 && (
            <p className="text-green-400 text-sm font-bold animate-bounce">
                Contraseña segura ✨✨✨✨✨✨✨
            </p>
        )}
    </div>
  )
}

export default PassValidator