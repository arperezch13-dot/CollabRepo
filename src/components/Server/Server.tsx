import React from 'react'
import './Server.css'

//Vamos a definir el contrato estricto
interface StatusProps {
    serverName: string;
    status: 'online' | 'offline' ; //Union type

}
const Server = (props: StatusProps) => {
  // Dterminar dinamicamente la clase css segun el estado del servidor
  const statusClass = props.status === 'online' ? 'status-online' : 'status-offline';
  
  //Determinar dinamicamente el texto indicador
  const statusText = props.status === 'online' ? 'Its work' : 'Fallen';

    return (
    <div className={`server-card ${statusClass}`}>
      <h3 >{props.serverName}</h3>
      <span className="indicator">{statusText}</span>
    </div>
  )
}

export default Server