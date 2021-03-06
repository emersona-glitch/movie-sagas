import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects';
// import AddMovie from './components/AddMovie/AddMovie';


function* fetchMovies() {

    try {
        let response = yield axios.get('/api/movie')
        console.log(response.data);
        yield put ( {type: 'SET_MOVIES', payload: response.data} )
    } catch (error) {
        console.log( 'error in fetching Movies', error );
    }

}

function* fetchGenres () {

    try {
        let response = yield axios.get('api/genre')
        console.log(response.data);
        yield put ( { type: 'SET_GENRES', payload: response.data } );
    } catch (error) {
        console.log( 'error in fetch Genres', error );
    }

}

function* fetchDetails(action) {

    try {
        let response = yield axios.get(`api/movie/${action.payload}`)
        console.log(response.data);
        yield put({ type: 'SET_DETAILS', payload: response.data })
    } catch (error) {
        console.log('error in fetch details: ', error);
    }
}


// Used to store movies returned from the server
// this should already work ?
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
// this should already work ?
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('ADD_MOVIE', addMovie)
    
}

function* addMovie(action) {
    try {
        yield axios.post('api/movie', action.payload);
    } catch (error) {
        console.log('error adding movie', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
