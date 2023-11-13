import './index.css'

const CastDetails = props => {
  const {details} = props

  return (
    <li className="castImg">
      <img
        src={`https://image.tmdb.org/t/p/original${details.profile_path}`}
        alt="text"
        className="castDImg"
      />
      <p>{details.original_name}</p>
      <p>{details.character}</p>
    </li>
  )
}
export default CastDetails
