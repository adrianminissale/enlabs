import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Pagination from '../Pagination'
import Movie from '../Movie'
import GetMovies from '../../service'
import styles from './styles.module.scss'

function Movies() {
  const { page } = useParams()
  const [movies, setMovies] = useState([])
  const [total, setTotal] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const results = await GetMovies( page )
      if (results) {
        setMovies( results.movies )
        setTotal( results.total )
        setLoading( false )
      }
    })()
  }, [ page ])

  return (
    <>
      { loading ?
        <div>Loading...</div> :
        <>
          <div className={ styles.movies }>
            { movies.map( movie =>
              <Movie movie={ movie } key={ movie['_id'] } />
            ) }
          </div>
          <Pagination total={ total } />
        </>
      }
    </>
  )
}

export default Movies
