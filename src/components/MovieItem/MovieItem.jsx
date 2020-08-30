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