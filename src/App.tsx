import './App.css'
import Server from './components/Server/Server'
import StockBadge from './components/StockBadge/StockBadge'
import PlanCard from './components/PlanCard/PlanCard'
import Notification from './components/Notification/Notification'

function App() {

  return (
    <>
      <Server serverName="Web principal" status="online" />
      <Server serverName="Base de datos" status="online" />
      <Server serverName="Api de pagos" status="offline" />

      <StockBadge productName="Camiseta" stock={0} />
      <StockBadge productName="Gorra" stock={5} />
      <StockBadge productName="Taza" stock={15} />

      <PlanCard planName='Bassic' price={5} isPopular/>
      <PlanCard planName='Pro' price={15} isPopular={false}/>

      <Notification message= 'Success operation completed' type='success'/>
      <Notification message= 'Warning: Check your input' type='alert'/>
      <Notification message= 'Error: Something went wrong' type='error'/>
      
    </>
  )
}

export default App
