import {Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import TopRated from './Components/TopRated'
import Upcoming from './Components/Upcoming'
import MovieDetailsPage from './Components/MovieDetailsPage'
import SearchMovie from './Components/SearchMovies'
import './App.css'

// write your code here
const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/top-rated" component={TopRated} />
      <Route exact path="/upcoming" component={Upcoming} />
      <Route exact path="/movie/:id" component={MovieDetailsPage} />
      <Route exact path="/search/:search" component={SearchMovie} />
    </Switch>
  </>
)

export default App
