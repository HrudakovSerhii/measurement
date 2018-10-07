import React from 'react';
import { connect } from 'react-redux'

import propTypes from 'prop-types';

import './App.css';

import WorkDeskView from './views/WorkDeskView';

import ToolsView from './views/ToolsView';
import SettingsView from './views/SettingsView';

import { changePosition } from './views/SettingsView/actions'

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      appState: props.appState,
      toolsState: props.toolsState,
      calculationState: props.calculationState,
      workSpaceState: props.workSpaceState
    };
  }

  render() {
    const position = this.state.appState.toolbarPosition;

    return (
      <div className="app-c">
        <div className="work-space-c">
          <ToolsView position={position} toolsTypes={this.state.toolsState.toolsTypes} tools={this.state.toolsState.tools} />
          <WorkDeskView position={position}
                         type={this.state.workSpaceState.type}
                         mode={this.state.workSpaceState.mode}
                         view={this.state.workSpaceState.view}
                         quality={this.state.workSpaceState.quality} />
        </div>
        <SettingsView themeType={this.state.appState.themeType}
                      language={this.state.appState.language}
                      toolbarPosition={position} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  changePosition: (position) => {
    dispatch(changePosition(position))
  }
});

const mapStateToProps = (state) => ({
  text: state.text
});

App.propTypes = {
  appState: propTypes.object.isRequired,
  toolsState: propTypes.object.isRequired,
  calculationState: propTypes.object.isRequired,
  workSpaceState: propTypes.object.isRequired
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
