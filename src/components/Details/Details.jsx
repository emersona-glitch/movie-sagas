import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {

    componentDidMount = () => {

        // bro but do we even need to call axios for that?
        // or we can hold off til we need to get the genres

        // but the main contents of the page can already
        // be pulled from our reducer since it's setup to 
        // contain all of the movies that we've got

        // gotta call axios at the number that we indicated,
        // do a specific 

        // get the movie details from the reducer
        // for the movie that was clicked on
        // which means for the reducer.id to get linked
        // or whatever I'm trying to say.
        
        // also I think you're gonna have to do some sort of 
        // double get or join thing or I'm not sure
        // when you get the specific details of the movie you're after.
        // I'm pretty lost on that tbh

    }

    render () {
        return (

            <p>herre are the details</p>
            // Full screen view, displaying bigger movie poster,
            // larger title, and description.
            // so it's like we push the view to /details/:id
            // or something like that....

        )
    }

}


const putReduxDataProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxDataProps)(Details);