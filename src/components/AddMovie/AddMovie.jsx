import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


class AddMovie extends Component {

    state = {
        title: '',
        poster: '',
        description: '',
        genre: '',
    }

    handleCancel = () => {
        this.props.history.push('/')
    }

    handleSubmit = () => {
        console.log('submitted', this.state);
        if (this.state.title === '' || this.state.poster === '' ||
            this.state.description === '' || this.state.genre === '') {
                alert('please complete all fields')
                return null 
            }
        this.props.dispatch({ type: 'ADD_MOVIE', payload: this.state})
        this.props.dispatch({ type: 'FETCH_MOVIES' })
        this.props.history.push('/')

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

export default withRouter(connect(putReduxDataProps)(AddMovie));