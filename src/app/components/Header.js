import React from 'react';

export default class Header extends React.Component{
    handleChange(e){
        const name = e.target.value;
        this.props.changeName(name);
    }
    render(){
        return(
            <div>
                <h1>{this.props.hi} {this.props.name}</h1>
                <input type='text' value={this.props.name} onChange={this.handleChange.bind(this)} onBlur={(e) => e.target.value = ''}/>
            </div>
        )
    }
}