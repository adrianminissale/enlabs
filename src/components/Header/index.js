import React from 'react'
import Nav from '../Nav'
import { useHistory, Link } from 'react-router-dom'
import styles from './styles.module.scss'

function Header() {
  const history = useHistory()

  const reload = () => {
    history.push('/')
    location.reload()
  }

  return (
    <header className={ styles.header }>
      <Link className={ styles.logo } to='/' onClick={ reload }>TMDB</Link>
      <Nav />
    </header>
  )
}

export default Header
