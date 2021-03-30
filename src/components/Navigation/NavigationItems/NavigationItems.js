import React from 'react'
import Navigationitem from '../NavigationItem/Navigationitem'
import styles from './NavigationItems.module.css'

function NavigationItems() {
  return (
    <ul className={styles.NavigationItems}>
      <Navigationitem link='/' exact>
        Burger Builder
      </Navigationitem>
      <Navigationitem link='/orders'>Orders</Navigationitem>
    </ul>
  )
}

export default NavigationItems
