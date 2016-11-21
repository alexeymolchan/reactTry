import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './index.css'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr: [1,2,3]
        }
    }

    changeName(){
        this.setState({
            arr: [...this.state.arr, 4]
        });
    }
    render(){
        console.log(this.state.arr);
        let numbers;
        if (this.state.arr.length > 3){
            numbers = <div>{this.state.arr.map((numb, index) => <div key={index}>{numb}</div>)}</div>
        }
        return(
            <div className="appDiv">
                <button onClick={this.changeName.bind(this)}>push</button>
                {numbers}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

/*import { createStore} from 'redux';

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

store.dispatch({type: "ADD_SONG", payload: 'Make me move'});*/