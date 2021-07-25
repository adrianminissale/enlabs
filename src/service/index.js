function GetLiveEvents( page ) {
  let url = ''

  if (page) {
    url = `http://localhost:8080/movies?page=${ --page }`
  } else {
    url = `http://localhost:8080/movies`
  }

  return fetch( url )
    .then( res => res.json() )
    .then( data => data )
    .catch( err => console.error( 'api error', err ) )
}
export default GetLiveEvents
