function GetMovies( filter ) {
  let url = ''

  switch (filter.type) {
    case 'page':
      url = `http://localhost:8080/movies?page=${ --filter.value }`
      break;
    case 'genre':
      url = `http://localhost:8080/movies?genre=${ filter.value }`
      break;
    case 'name':
      url = `http://localhost:8080/movies?name=${ filter.value }`
      break;
    default:
      url = `http://localhost:8080/movies`
      break;
  }

  return fetch( url )
    .then( res => res.json() )
    .then( data => data )
    .catch( err => console.error( 'api error', err ) )
}

export default GetMovies
