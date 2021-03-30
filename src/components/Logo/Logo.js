import React from 'react'
import logo from '../../assets/images/burger-logo.png'
import styles from './Logo.module.css'

function Logo(props) {
  return (
    <div className={styles.Logo}>
      <img src={logo} alt='burger-logo' />
    </div>
  )
}

export default Logo
