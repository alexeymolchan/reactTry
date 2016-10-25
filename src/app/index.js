import React from 'react';
import ReactDOM from 'react-dom';

class FirstComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>It's the first Component, yahooo!!!!</h1>
            </div>
        )
    }
}

ReactDOM.render(<FirstComponent/>, document.getElementById('app'));