import React from 'react';
import './Results.less';

export class ResultsComponent extends React.Component {
  constructor(props) {
    super();

    const { started, winner, playerSign } = {...props.process}

    this.state = {
      started: props.process.started,
      winner: props.process.winner
    };
  }

  getCurrentStatus() {
    const state = this.state;

    if (!state.started) {
      return 'Ready to start'
    } else {
      if (state.winner) {
        if (state.winner === 'draw') {
          return 'Draw'
        } else {
          return state.winner === state.playerSign
            ? 'You win!'
            : 'You lose'
        }
      } else {
        return 'In progress'
      }
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      started: nextProps.process.started,
      winner: nextProps.process.winner
    }
  }

  render() {
    return (
      <div className="results">
        <span className="results__label">Result:</span>
        <span>{ this.getCurrentStatus() }</span>
      </div>
    )
  };
}
