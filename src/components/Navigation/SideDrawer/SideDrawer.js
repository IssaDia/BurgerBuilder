import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import styles from './SideDrawer.module.css'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../../UI/Backdrop/Backdrop'

function SideDrawer(props) {
  let attachedClasses = [styles.SideDrawer, styles.Close]
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open]
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default SideDrawer
