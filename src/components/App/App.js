import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import AddMovie from '../AddMovie/AddMovie'
import MovieList from '../MovieList/MovieList'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          {/* ADD PAGES! */}

          <nav>
            <Link to='/'>Movie List</Link> |
            <Link to='/AddMovie'>Add Movie</Link>
          </nav>

          <Route exact path="/" component={MovieList} />
          <Route exact path="/AddMovie" component={AddMovie} />
          {/* <Route exact path="/Details/${dingus}" component={details} />  <== how does this component part work */}
          {/* We're going to need to do some conditional rendering so I know I'km going to need to get that up */}
          {/* are we?? I don't even think we are} */}

        </Router>
        <p>Empty Page</p>
      </div>
    );
  }
}

export default App;
