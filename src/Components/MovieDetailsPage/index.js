import {Component} from 'react'
import Navbar from '../Navbar'
import './index.css'
import MovieDetails from '../MovieDetails'
import CastDetails from '../CastDetails'

class MovieDetailsPage extends Component {
  state = {list: [], cast: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=9d5b6478a7eff84ebcfcd18ade66697d&language=en-US`,
    )
    const data = await response.json()
    const cresponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9d5b6478a7eff84ebcfcd18ade66697d&language=en-US`,
    )
    const cdata = await cresponse.json()
    this.setState({list: data, cast: cdata, isLoading: false})
  }

  render() {
    const {isLoading, list, cast} = this.state
    if (!isLoading) {
      return (
        <>
          <MovieDetails list={list} />
          <ul className="castCont">
            {cast.cast.map(each => (
              <CastDetails details={each} key={each.cast_id} />
            ))}
          </ul>
        </>
      )
    }
    return <p>Loading</p>
  }
}
export default MovieDetailsPage
