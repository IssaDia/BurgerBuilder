import React from 'react'
import styles from './Navigationitem.module.css'
import { NavLink } from 'react-router-dom'

function Navigationitem(props) {
  return (
    <li className={styles.NavigationItem}>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={styles.active}
      >
        {props.children}
      </NavLink>
    </li>
  )
}

export default Navigationitem
