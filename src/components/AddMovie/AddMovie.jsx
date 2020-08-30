import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddMovie extends Component {

    state = {
        title: '',
        poster: '',
        description: '',
        genre: -1
    }

    handleCancel = () => {
        this.props.history.push('/')
    }

    handleSubmit = () => {
        this.props.dispatch({ type: 'ADD_MOVIE', payload: this.state})
        console.log('submitted', this.state);

    }

    handleChange = (event, type) => {

        switch (type) {
            case 'title':
                this.setState({ ...this.state, title: event.target.value })
                break;
            case 'poster':
                this.setState({ ...this.state, poster: event.target.value })
                break;
            case 'description':
                this.setState({ ...this.state, description: event.target.value })
                break;
            case 'genre':
                this.setState({ ...this.state, genre: Number(event.target.value) })
                break;
            default:
                console.log('something is wrong in handleChange');
        }

    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_GENRES' })
    }

    render() {
        return (
            <>
                <p>add your movie</p>  <br /><br />
                <input onChange={(event) => this.handleChange(event, 'title')} placeholder="title"></input>  <br /><br />
                <input onChange={(event) => this.handleChange(event, 'poster')} placeholder="poster url"></input>  <br /><br />
                <textarea onChange={(event) => this.handleChange(event, 'description')} placeholder="description"></textarea>  <br /><br />
                <label for="genre">Choose a genre:</label>
                <select onChange={(event) => this.handleChange(event, 'genre')} name="genre" id="genre">
                    {this.props.reduxState.genres.map((genre) => {
                        return (
                            <option value={genre.id}>{genre.name}</option>
                        )
                    })}
                </select> <br /><br />
                <button onClick={this.handleSubmit}>Submit</button>  <br />
                <button onClick={this.handleCancel}>Cancel</button>
                {/* // Nice looking form with a cancel
            // button that routes you back to home
            // a dropdown menu (which could be dynamically)
            // generated so we can add more categories
             */}
            </>
        )
    }

}


const putReduxDataProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxDataProps)(AddMovie);