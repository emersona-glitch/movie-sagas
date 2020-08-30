import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


class MovieItem extends Component {

// componentDidMount = () => {
//     this.handleClick()
// }

    handleClick = (id) => {
        // console.log(this.props.description);
        this.props.directToDetails(id);
    }

    render () {
        return (
            
            // <p>{}</p>
            <>
                <img onClick={() => {this.handleClick(this.props.id)}} src={this.props.poster} alt={this.props.url}/>
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

export default withRouter(connect(putReduxDataProps)(MovieItem));

// fetch details payload id

// axios get details/action.payload