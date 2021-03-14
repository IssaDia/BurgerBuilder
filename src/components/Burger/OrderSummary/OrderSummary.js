import React from 'react'
import Aux from '../../../hoc/Aux'

function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    )
  })
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <button>Cancel</button>
      <button>Continue</button>
    </Aux>
  )
}

export default OrderSummary
