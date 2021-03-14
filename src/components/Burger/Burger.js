import React from 'react'
import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
  /* move this to an external file : burgerTypes.js for example*/
  const burgers = [ 
    {type : 'bread-top'},
    {type : 'cheese'},
    {type : 'meat' },
    {type: 'bread-bottom'}
  }]
  return (
    <div className={styles.Burger}>
    {burgers.map( burger => <BurgerIngredient type={burger.type} />)}
    </div>
  )
}

export default Burger
