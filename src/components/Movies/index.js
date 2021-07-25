import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import Pagination from '../Pagination'
import GetMovies from '../../service'
import styles from './styles.module.scss'

function Movies() {
  const { page } = useParams()
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const movies = await GetMovies( page )
      if (movies) {
        setMovies( movies )
        setLoading( false )
      }
    })()
  }, [ page ])

  return (
    <div className={ styles.movies }>
      { loading ?
        <div>Loading...</div> :
        <div>
          { movies.movies.map( movie => movie.title ) }
          <Pagination total={ movies.total } />
        </div>
      }
    </div>
  )
}

export default Movies
