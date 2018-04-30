import { connect } from 'react-redux';

import { HeaderComponent } from './Header.component';
import { processActions } from '../../redux/process/index';

export const HeaderContainer = connect(
  function mapStateToProps(state) {
    return {}
  },
  function mapDispatchToProps(dispatch) {
    return {
      resetGame: () => {
        dispatch(processActions.resetGame())
      }
    };
  }
)(HeaderComponent);