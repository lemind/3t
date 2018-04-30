import { connect } from 'react-redux';

import { ResultsComponent } from './Results.component';

export const ResultsContainer = connect(
  function mapStateToProps(state) {
    return {
      process: state.process
    };
  },
  function mapDispatchToProps(dispatch) {
    return {}
  }
)(ResultsComponent);