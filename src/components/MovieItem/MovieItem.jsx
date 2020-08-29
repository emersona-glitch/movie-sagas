import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieList extends Component {

    handleClick = () => {
        console.log('pony time', this.props.description);
    }

    render () {
        return (
            
            // <p>{}</p>
            <>
            <img onClick={this.handleClick} src={this.props.poster} alt={this.props.url}/>
            </>



            // We want a card, with a poster image of a certain
            // size, and a details button which both onClick
            // route you to the details page.....how do we
            // do that from within this component??
            // and...whatever it's all about mapping that id
            // I guess.



            // but then what when we're generating each component
            //  am I passing props in or wtf am I doing...idk

        )
    }

}


const putReduxDataProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxDataProps)(MovieList);