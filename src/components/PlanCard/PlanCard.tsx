import React from 'react'
import './PlanCard.css'


interface PlanCardProps {
    planName: string;
    price:number;
    isPopular: boolean;
}

const PlanCard = ( props: PlanCardProps) => {

    const message = props.isPopular ? 'outstanding' : '';

  return (
    <div className={`plan-card ${message}`}>
        {props.isPopular && <span className="label-popular">Most Popular</span>}
      <h3>{props.planName}</h3>
      <p>{props.price}/month</p>
    </div>
  )
}

export default PlanCard