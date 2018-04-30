import { connect } from 'react-redux';

import { BoardComponent } from './Board.component';
import { processActions } from '../../redux/process/index';

export const BoardContainer = connect(
  function mapStateToProps(state) {
    return {
      process: state.process
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      updateBoard: (board) => {
        dispatch(processActions.updateBoard(board))
      },
      setWinner: (winner) => {
        dispatch(processActions.setWinner(winner))
      },
      startGame: () => {
        dispatch(processActions.startGame())
      }
    };
  }
)(BoardComponent);