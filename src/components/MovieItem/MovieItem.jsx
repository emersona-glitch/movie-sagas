import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieList extends Component {

    render () {
        return (
            
            <p>hi</p>
            // We want a card, with a poster image of a certain
            // size, and a details button which both onClick
            // route you to the details page.....how do we
            // do that from within this component??


        )
    }

}


const putReduxDataProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxDataProps)(MovieList);