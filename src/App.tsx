import './App.css'
import StockBadge from './components/StockBadge/StockBadge'
import PlanCard from './components/PlanCard/PlanCard'
import Notifications from './components/Notifications/Notifications'

function App() {

  return (
    <>

      <StockBadge productName="Camiseta" stock={0} />
      <StockBadge productName="Gorra" stock={5} />
      <StockBadge productName="Taza" stock={15} />

      <PlanCard name='Bassic' price={5} isPopular/>
      <PlanCard name='Pro' price={15} isPopular={false}/>

      <Notifications message= 'Success operation completed' type='success'/>
      <Notifications message= 'Warning: Check your input' type='alert'/>
      <Notifications message= 'Error: Something went wrong' type='error'/>
      
    </>
  )
}

export default App
