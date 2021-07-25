import React from 'react'
import Nav from '../Nav'
import styles from './styles.module.scss'

function Header() {
  return (
    <header className={ styles.header }>
      <div className={ styles.logo }>TMDB</div>
      <Nav />
    </header>
  )
}

export default Header
