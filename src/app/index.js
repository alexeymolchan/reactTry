var React = require('react');
var ReactDom = require('react-dom');

var FirstComponent = React.createClass({
    render: function(){
        return(
            <div>
                <h1>It's the first Component, yahooo!!!!</h1>
            </div>
        )
    }
});

ReactDom.render(<FirstComponent/>, document.getElementById('app'));