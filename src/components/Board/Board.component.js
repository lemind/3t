import React from 'react';
import './Board.less';

import { SquareComponent as Square } from './../Square/Square.component';
import AI from './../../helpers/AI'

export class BoardComponent extends React.Component {
  constructor(props) {
    super();

    const squares = []
    for (var i = 0; i < 9; i++) {
      squares.push(i)
    }

    this.state = {
      squares: props.process.squares,
      playerSign: props.process.playerSign,
      AISign: props.process.AISign,
      finished: props.process.finished,
      winner: props.process.winner
    };

    this.actions = {};
    this.actions.resetGame = props.resetGame;
    this.actions.updateBoard = props.updateBoard;
    this.actions.setWinner = props.setWinner;
  }

  isEmptySquare (key) {
    return Number.isInteger(this.state.squares[key])
  }

  handleClick(i) {
    if (this.state.finished || !this.isEmptySquare(i)) return
    const squares = this.state.squares.slice();
    squares[i] = this.state.playerSign;
    this.setState({ squares },
      this.checkWinner.bind(this, this.state.playerSign)
    );
  }

  checkWinner(player) {
    if (this.isWinner(player)) {
      this.finishGame(player)
    } else {
      if (player === this.state.playerSign) {
        this.AIMove()
      }
    }
  }

  AIMove() {
    const squares = this.state.squares.slice();
    const AIsign = this.state.AISign
    const bestIndex = AI.getBestMove(squares, AIsign).index
    squares[bestIndex] = AIsign;
    this.setState({ squares },
      this.checkWinner.bind(this, this.state.AISign)
    );
  }

  isWinner(player) {
    return AI.isWin(this.state.squares, player)
  }

  finishGame(winner) {
    this.setState({
      finished: true,
      winner
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      squares: nextProps.process.squares,
      finished: nextProps.process.finished,
      winner: nextProps.process.winner
    }
  }

  render() {
    return (
      <div className="board">
        <div className="board__row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board__row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board__row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  };
}
