/**
 * Created by Serhiy on 06.10.18.
 */
import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

// styles
import './styles.css';

import { changePosition } from './actions'

import { TOOL_BAR_POSITION } from './../../constants';

class SettingsView extends React.Component {
  static propTypes = {
    changeToolbarPosition: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      loaded: this.props.loaded,
      themeType: this.props.themeType,
      language: this.props.language,
      // toolbarPosition: this.props.toolbarPosition TODO: if this props alse in mapStateToProps then remove from here
    }
  }

  render() {
    return (
      <div className="setting-view-c">
        <div className="file-c">

        </div>
        <div className="edit-c">

        </div>
        <div className="view-c">

          <button onClick={() => this.props.changePosition(TOOL_BAR_POSITION.DOWN)}>Change Position</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    changePosition: state.changePosition
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changePosition: (position) => dispatch(changePosition(position)),
  };
}

SettingsView = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsView);

export default SettingsView;
