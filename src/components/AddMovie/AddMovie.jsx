import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddMovie extends Component {

    render () {
        return (
            
            <p>add your movie</p>
            // Nice looking form with a cancel
            // button that routes you back to home
            // a dropdown menu (which could be dynamically)
            // generated so we can add more categories
            
        )
    }

}


const putReduxDataProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxDataProps)(AddMovie);