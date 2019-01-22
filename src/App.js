import React from 'react';
import { connect } from 'react-redux'

import propTypes from 'prop-types';

import './styles/app.scss';
import './styles/index.scss';

// import WorkSpaceView from './views/WorkSpaceView';
//
// import ToolsView from './views/ToolsView';
// import SettingsView from './views/SettingsView';

// import { changePosition } from './views/SettingsView/actions'

import { SimpleCalculationScreen } from './screens';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appState: props.appState,
      toolsState: props.toolsState,
      calculationState: props.calculationState,
      workSpaceState: props.workSpaceState
    };
  }

  render() {
    // const position = this.props.toolbarPosition;

    return (
      <div className="app-c">
        <SimpleCalculationScreen />
        {/*<div className="work-space-c">*/}
          {/*<ToolsView position={position} toolsTypes={this.state.toolsState.toolsTypes} tools={this.state.toolsState.tools} />*/}
          {/*<WorkSpaceView position={position}*/}
                         {/*type={this.state.workSpaceState.type}*/}
                         {/*mode={this.state.workSpaceState.mode}*/}
                         {/*view={this.state.workSpaceState.view}*/}
                         {/*quality={this.state.workSpaceState.quality} />*/}
        {/*</div>*/}
        {/*<SettingsView themeType={this.state.appState.themeType}*/}
                      {/*language={this.state.appState.language}*/}
                      {/*toolbarPosition={position} />*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    toolbarPosition: state.appState.toolbarPosition
  }
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

App.propTypes = {
  appState: propTypes.object,
  toolsState: propTypes.object,
  calculationState: propTypes.object,
  workSpaceState: propTypes.object
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
