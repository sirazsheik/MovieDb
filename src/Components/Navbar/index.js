import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Navbar extends Component {
  state = {a: ''}

  change = event => {
    const {a} = this.state
    const {history} = this.props
    this.setState({a: event.target.value})
    history.push('/search')
  }

  sear = () => {
    const {a} = this.state
    const {history} = this.props

    console.log(history)
    history.push(`/search/${a}`)
    this.setState({a: ''})
  }

  render() {
    const {a} = this.state

    return (
      <nav>
        <div className="navBar">
          <div className="navHead">
            <h1>movieDB</h1>
          </div>
          <div className="NavItemCont">
            <div>
              <Link to="/">
                <button type="button" className="Navbuttons">
                  <h1>Popular</h1>
                </button>
              </Link>
              <Link to="/top-rated">
                <button type="button" className="Navbuttons">
                  <h1>Top Rated</h1>
                </button>
              </Link>
              <Link to="/upcoming">
                <button type="button" className="Navbuttons">
                  <h1>Upcoming</h1>
                </button>
              </Link>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                className="navInput"
                onChange={this.change}
                value={a}
              />
              <button type="button" onClick={this.sear}>
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
