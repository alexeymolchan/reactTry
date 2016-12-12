import React from 'react';
import TextField from 'material-ui/TextField';

const labelStyle = {
  fontFamily: 'Lato, sans-serif',
  margin: '0 10px 0 0',
  color: '#757575',
  width: '90px',
  fontSize: '16px',
  lineHeight: '16px',
  paddingTop: '10px',
};

export default class Field extends React.Component {
  render() {
    let textField;

    if (this.props.label) {
      textField = (
        <div style={{display: 'flex', flexDirection: 'row'}} >
          <div style={labelStyle}>
            {this.props.label}
          </div>
          <TextField type={this.props.type}  />
        </div>

      );
    }else{
      textField = (
        <TextField type={this.props.type} />
      );
    }
    return(
      <div>
        {textField}
      </div>
    );
  }

}
