import React from 'react';

export default class Header extends React.Component{
    constructor(props){
        super();
        this.state = {name: 'REACT is awesome'};
        this.props = props;
    }
    render(){
        return(
            <div>
                <h1>{this.props.hi}, {this.state.name} !</h1>
            </div>
        )
    }
}