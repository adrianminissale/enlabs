import React from 'react'
import styles from './styles.module.scss'

function Nav() {
  return (
    <nav className={ styles.nav }>
      <input type='text' placeholder='...search movie' />
    </nav>
  )
}

export default Nav
