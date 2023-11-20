import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import MovieItems from '../MovieItems'
import Navbar from '../Navbar'
import '../Home/index.css'

class SearchMovie extends Component {
  state = {list: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match, history} = this.props
    const {params} = match
    const {search} = params
    console.log(search)
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9d5b6478a7eff84ebcfcd18ade66697d&language=en-US&query=${search}&page=1`,
    )
    const data = await response.json()

    this.setState({list: data, isLoading: false})
  }

  render() {
    const {isLoading, list} = this.state
    if (!isLoading) {
      return (
        <>
          <ul className="displayCard">
            {list.results.map(each => (
              <MovieItems details={each} key={each.id} />
            ))}
          </ul>
        </>
      )
    }
    return <p>Loading</p>
  }
}
export default SearchMovie
