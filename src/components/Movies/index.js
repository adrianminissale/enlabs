import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Pagination from '../Pagination'
import Movie from '../Movie'
import GetMovies from '../../service'
import styles from './styles.module.scss'

function Movies() {
  const { page, name, genre } = useParams()
  const [movies, setMovies] = useState([])
  const [total, setTotal] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const filter = {
        type: page ? 'page' : name ? 'name' : genre ? 'genre' : '',
        value: page || name || genre
      }
      const results = await GetMovies( filter )
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
        movies && movies.length ?
          <>
            <div className={ styles.movies }>
              { movies.map( movie =>
                <Movie movie={ movie } key={ movie['_id'] } />
              ) }
            </div>
            <Pagination total={ total } />
          </> :
          <div>No results</div>
      }
    </>
  )
}

export default Movies
