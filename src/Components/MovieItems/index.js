import {Link} from 'react-router-dom'
import './index.css'

const MovieItems = props => {
  const {details} = props
  console.log(details)

  return (
    <li className="cardCont">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
          alt="h"
          className="cardImg"
        />
        <h1>{details.title}</h1>
        <p>{details.vote_average}</p>
        <button className="cardButton" type="button">
          <Link to={`/movie/${details.id}`}>View Details</Link>
        </button>
      </div>
    </li>
  )
}

export default MovieItems
