import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import styles from './CheckoutSummary.module.css'

function CheckoutSummary(props) {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>I hope it taste well!!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType='Danger' clicked={props.checkoutCancelled}>
        Cancel
      </Button>
      <Button btnType='Success' clicked={props.checkoutContinued}>
        Continue
      </Button>
    </div>
  )
}

export default CheckoutSummary
