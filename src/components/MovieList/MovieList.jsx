import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieList extends Component {

    render () {
        return (
            <p>HI</p>
        )
    }

}


const putReduxDataProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxDataProps)(MovieList);