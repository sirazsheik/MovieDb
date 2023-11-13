import './index.css'

const MovieDetails = props => {
  const {list} = props

  return (
    <div className="movieDetailsCont">
      <img
        className="movieDetailsImg"
        src={`https://image.tmdb.org/t/p/original${list.poster_path}`}
        alt={list.title}
      />
      <div className="singleMovieDetails">
        <h1>{list.title}</h1>
        <p>{list.vote_average}</p>
        <p>{list.runtime}</p>
        {list.genres.map(each => (
          <p> {each.name}</p>
        ))}
        <p>{list.release_date}</p>
        <p>{list.overview}</p>
      </div>
    </div>
  )
}
export default MovieDetails
