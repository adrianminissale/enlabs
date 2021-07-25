import React from 'react'
import { useParams, Link } from 'react-router-dom'

import styles from './styles.module.scss'

function Movie( props ) {
  const { title, poster_path } = props.movie
  return (
    <div className={ styles.movie }>
      <Link className={ styles.link }>
        <img src={ `https://www.themoviedb.org/t/p/w185${ poster_path }` } alt={ title } className={ styles.image } />
      </Link>
      <div className={ styles.title }><Link>{ title }</Link></div>
    </div>
  )
}

export default Movie
