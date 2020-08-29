import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {

    render () {
        return (

            <p>hi</p>
            // Full screen view, displaying bigger movie poster,
            // larger title, and description.

        )
    }

}


const putReduxDataProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxDataProps)(Details);