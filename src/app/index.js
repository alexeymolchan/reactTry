import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

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
            <div>
                <Header changeName={this.changeName.bind(this)} hi="Hi dudes!" name={this.state.name}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));