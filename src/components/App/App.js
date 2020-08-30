import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import AddMovie from '../AddMovie/AddMovie'
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details'
import MovieItem from '../MovieItem/MovieItem';

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
          <Route path="/AddMovie" component={AddMovie} />
          <Route path="/details" component={Details} />
          <Route path="/MovieItem" component={MovieItem} />
          {/* <Route exact path="/Details/${}" component={details} />  <== how does this component part work */}
          

        </Router>
      </div>
    );
  }
}

export default App;
