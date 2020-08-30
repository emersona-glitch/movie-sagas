import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Details extends Component {

    componentDidMount = () => {

    }

    render() {
        let item = this.props.reduxState.details[0];
        return (
            <>
                {item && <h2>{item.title}</h2>}
                <h4>Genre:</h4>
                <ul>
                    {this.props.reduxState.details.map((movie, i) => {
                        return (
                            <p key={i}>{movie.name}</p>
                        )
                    })}
                </ul>
                {item && <p>{item.description}</p>}
                {item && <img src={item.poster} alt={item.title} />} <br/>
                <button onClick={()=>this.props.history.push('/')} >Back</button>
            </>

        )
    }

}


const putReduxDataProps = (reduxState) => {
    return {
        reduxState
    }
}

export default withRouter(connect(putReduxDataProps)(Details));