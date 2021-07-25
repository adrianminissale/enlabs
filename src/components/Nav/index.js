import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './styles.module.scss'

function Nav() {
  const history = useHistory()

  const goToName = () => {
    const name = document.getElementById('name').value
    if (name && name.length > 4) {
      history.push(`/name/${name}`)
      location.reload()
    }
  }

  const goToGenre = ( e ) => {
    const genre = e.target.value.toLowerCase()
    history.push(`/genre/${genre}`)
    location.reload()
  }

  return (
    <nav className={ styles.nav }>
      <div className={ styles.title }>Search by name</div>
      <input type='text' id='name' placeholder='...search movie' />
      <button onClick={ goToName }>search</button>

      <div className={ styles.separator }> | </div>

      <div className={ styles.title }>Filter by genre</div>
      <select onChange={ e => goToGenre( e ) }>
        <option default>...</option>
        <option>Action</option>
        <option>Adventure</option>
        <option>Animation</option>
        <option>Comedy</option>
        <option>Crime</option>
        <option>Documentary</option>
        <option>Drama</option>
        <option>Family</option>
        <option>Fantasy</option>
        <option>History</option>
        <option>Horror</option>
        <option>Music</option>
        <option>Mystery</option>
        <option>Romance</option>
        <option>Science Fiction</option>
        <option>TV Movie</option>
        <option>Thriller</option>
        <option>War</option>
        <option>Western</option>
      </select>
    </nav>
  )
}

export default Nav
