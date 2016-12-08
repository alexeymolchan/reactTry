import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ActionAndroid from 'material-ui/svg-icons/Action/Android';


import './index.css'

const buttons = {
  overview: {
    primaryText: 'overview',
    id: 1,
    icon: 'ActionAndroid'
  },
  calendar: {
    primaryText: 'calendar',
    id: 2,
    icon: 'ActionAndroid'
  },
  candidates: {
    primaryText: 'candidates',
    id: 3,
    icon: 'ActionAndroid'
  },
  reports: {
    primaryText: 'reports',
    id: 4,
    icon: 'ActionAndroid'
  },
  jobs: {
    primaryText: 'jobs',
    id: 5,
    icon: 'ActionAndroid'
  }
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleClick(e, itemId){
    this.setState({
      value: itemId,
    });
  }

  render() {
    let selectedMenuItemStyle;
    if (this.state.value === 1){
      selectedMenuItemStyle = {color: 'pink', borderLeft: '8px solid pink'};
    }else if (this.state.value === 2){
      selectedMenuItemStyle = {color: 'green', borderLeft: '8px solid green'};
    }else if (this.state.value === 3){
      selectedMenuItemStyle = {color: 'aquamarine', borderLeft: '8px solid aquamarine'};
    }else if (this.state.value === 4){
      selectedMenuItemStyle = {color: 'orange', borderLeft: '8px solid orange'};
    }else{
      selectedMenuItemStyle = {color: 'purple', borderLeft: '8px solid purple'};
    }
    return (
      <div>
        <MuiThemeProvider>
          <div style={{width: '100%', border: '1px solid orange', overflow: 'hidden'}}>
            <Menu value={this.state.value} selectedMenuItemStyle={selectedMenuItemStyle} style={{width: '100%'}} >
              <MenuItem
                style={{borderLeft: '8px solid transparent', color: 'black', width: 'inherit'}}
                primaryText={this.props.buttons.overview.primaryText}
                leftIcon={<ActionAndroid color={this.state.value === this.props.buttons.overview.id ? 'pink' : 'black'}/>}
                value={this.props.buttons.overview.id}
                onClick={(e) => this.handleClick(e, this.props.buttons.overview.id)}
              />
              <MenuItem
                style={{borderLeft: '8px solid transparent', color: 'black'}}
                primaryText={this.props.buttons.calendar.primaryText}
                leftIcon={<ActionAndroid color={this.state.value === this.props.buttons.calendar.id ? 'green' : 'black'}/>}
                value={this.props.buttons.calendar.id}
                onClick={(e) => this.handleClick(e, this.props.buttons.calendar.id)}
              />
              <MenuItem
                style={{borderLeft: '8px solid transparent', color: 'black'}}
                primaryText={this.props.buttons.candidates.primaryText}
                leftIcon={<ActionAndroid color={this.state.value === this.props.buttons.candidates.id ? 'aquamarine' : 'black'} />}
                value={this.props.buttons.candidates.id}
                onClick={(e) => this.handleClick(e, this.props.buttons.candidates.id)}
              />
              <MenuItem
                style={{borderLeft: '8px solid transparent', color: 'black'}}
                primaryText={this.props.buttons.reports.primaryText}
                leftIcon={<ActionAndroid color={this.state.value === this.props.buttons.reports.id ? 'orange' : 'black'} />}
                value={this.props.buttons.reports.id}
                onClick={(e) => this.handleClick(e, this.props.buttons.reports.id)}
              />
              <MenuItem
                style={{borderLeft: '8px solid transparent', color: 'black'}}
                primaryText={this.props.buttons.jobs.primaryText}
                leftIcon={<ActionAndroid color={this.state.value === this.props.buttons.jobs.id ? 'purple' : 'black'} />}
                value={this.props.buttons.jobs.id}
                onClick={(e) => this.handleClick(e, this.props.buttons.jobs.id)}
              />
            </Menu>
          </div>
        </MuiThemeProvider>
      </div>
    )
  };
}

App.defaultProps = {
  color: 'aquamarine',
};

ReactDOM.render(<App buttons={buttons} />, document.getElementById('app'));

