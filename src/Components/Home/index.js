import {Component} from 'react'
import MovieItems from '../MovieItems'
import Navbar from '../Navbar'
import './index.css'

class Home extends Component {
  state = {list: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=9d5b6478a7eff84ebcfcd18ade66697d&language=en-US&page=1',
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
export default Home
