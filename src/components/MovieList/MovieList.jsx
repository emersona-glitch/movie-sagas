import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem'


class MovieList extends Component {

    componentDidMount = () => {
        // do your saga fetch dispatch thing here, 
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    }

    directToDetails = (id) => {
        // console.log('going to details', id);
        this.props.history.push('/Details')
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: id})

    }

    render() {
        return (

            <>
                <p>itsa movie list</p>

                
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