import './StockBadge.css'

interface StockBadgeProps {
    productName: string;
    stock: number;
}

const StockBadge = (props: StockBadgeProps) => {

  const stockMessage =
    props.stock === 0
      ? 'sold-out'
      : props.stock <= 10
        ? 'critical'
        : 'normal'

  return (
  <div className={`stockbadge-card ${stockMessage}`}>  
        <strong>{props.productName}</strong>
        <p>{props.stock} disponibles</p>
    <p>{stockMessage}</p>
    </div>
    
  )
}

export default StockBadge