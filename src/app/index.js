/*import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './index.css'

class App extends React.Component{
    constructor(){
        super();
        this.state = {name: 'REACT is awesome'};
    }

    changeName(name){
        this.setState({name});
    }
    render(){
        return(
            <div className="appDiv">
                <Header changeName={this.changeName.bind(this)} hi="Hi dudes!" name={this.state.name}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));*/

import { createStore} from 'redux';

const initialState = {
    result: 0,
    songs: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD":
            return {
                ...state,
                result: state.result + action.payload
            }
        case "SUBTRACT":
            return {
                ...state,
                result: state.result - action.payload
            }
        case "ADD_SONG":
            return {
                ...state,
                songs: [...state.songs, action.payload]
            }
        default:
            return state;
    }
};



const store = createStore(reducer);

store.subscribe(() => {
    console.log('dispatched', store.getState());
});

store.dispatch({type: "ADD", payload: 15});

store.dispatch({type: "ADD", payload: 10});

store.dispatch({type: "SUBTRACT", payload: 75});

store.dispatch({type: "ADD_SONG", payload: 'Tumblr girls'});

store.dispatch({type: "ADD_SONG", payload: 'Make me move'});