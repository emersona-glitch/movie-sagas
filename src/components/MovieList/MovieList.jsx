import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem'


class MovieList extends Component {

    componentDidMount = () => {
        // do your saga fetch dispatch thing here, 
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    }

    directToDetails = () => {
        
        this.props.history.push('/Details')

        // when clicking on a movie poster or details,
        // pull up a details page where we're retrieving the
        // info from the movie of the dingus we clicked on
        // where we push history
    }

    render() {
        return (

            <>
                <p>itsa movie list</p>

                {/* // ok first things first we're gonna do the whole
            // thing here we go */}
                <ul>
                    {this.props.reduxState.movies.map((movie, i) => {

                        return (
                            // <li>{movie.title}</li>
                            <>
                                {() => { console.log(movie.url) }}
                                <MovieItem
                                    key={movie.id}
                                    directToDetails={this.directToDetails}
                                    id={movie.id}
                                    description={movie.description}
                                    title={movie.title}
                                    poster={movie.poster} />
                                <br />
                            </>
                        )

                    })}

                </ul>


                {/* // this is going to be a grid list of all of
            // the <MovieItem/> components that are generated
            // from the contents of our database,
            // which will be put into an array reducer
            ////////////////////
            // bro you gotta push your fuckin history
            // <button onClick={() => props.history.push('/pizzas')}>Order a pizza!</button> */}
            </>
        )
    }

}


const putReduxDataProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxDataProps)(MovieList);