import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieList extends Component {

    componentDidMount = () => {
        // do your saga fetch dispatch thing here, 
    }

    handleClick = () => {
        // when clicking on a movie poster or details,
        // pull up a details page where we're retrieving the
        // info from the movie of the dingus we clicked on
    }

    render () {
        return (
            <p>hi</p>
            // this is going to be a grid list of all of
            // the <MovieItem/> components that are generated
            // from the contents of our database,
            // which will be put into an array reducer
            ////////////////////
            // bro you gotta push your fuckin history
            // <button onClick={() => props.history.push('/pizzas')}>Order a pizza!</button>
        )
    }

}


const putReduxDataProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxDataProps)(MovieList);