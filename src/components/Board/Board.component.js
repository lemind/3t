import React from 'react';
import './Board.less';

import { SquareComponent as Square } from './../Square/Square.component';
import AI from './../../helpers/AI';
import { CONFIG } from './../../config';

export class BoardComponent extends React.Component {
  constructor(props) {
    super();

    const squares = []
    for (var i = 0; i < 9; i++) {
      squares.push(i)
    }

    this.state = {
      squares: props.process.squares,
      playerSign: CONFIG.PLAYER_SIGN,
      AISign: CONFIG.AI_SIGN,
      winner: props.process.winner,
      moveNumber: 0,
      lastMoveNumber: CONFIG.MOVE_NUMBER
    };

    this.actions = {};
    this.actions.startGame = props.startGame;
    this.actions.updateBoard = props.updateBoard;
    this.actions.setWinner = props.setWinner;
  }

  isEmptySquare (key) {
    return Number.isInteger(this.state.squares[key])
  }

  handleClick(i) {
    if (this.state.winner || !this.isEmptySquare(i)) return

    if (this.state.moveNumber === 0) {
      this.actions.startGame()
    }

    const squares = this.state.squares.slice();
    squares[i] = this.state.playerSign;

    this.actions.updateBoard(squares);

    this.setState(
      {
        squares,
        moveNumber: this.state.moveNumber + 1
      },
      this.checkWinner.bind(this, this.state.playerSign)
    );
  }

  checkWinner(player) {
    if (this.isWinner(player)) {
      this.finishGame(player)
    } else {
      if (this.state.moveNumber === this.state.lastMoveNumber) {
        this.finishGame('draw')
      } else {
        if (player === this.state.playerSign) {
          this.AIMove()
        }
      }
    }
  }

  AIMove() {
    const squares = this.state.squares.slice();
    const AIsign = this.state.AISign
    const bestIndex = AI.getBestMove(squares, AIsign).index
    squares[bestIndex] = AIsign;
    this.actions.updateBoard(squares);

    this.setState(
      {
        squares,
        moveNumber: this.state.moveNumber + 1
      },
      this.checkWinner.bind(this, this.state.AISign)
    );
  }

  isWinner(player) {
    return AI.isWin(this.state.squares, player)
  }

  finishGame(winner) {
    this.actions.setWinner(winner);

    this.setState({
      winner,
      moveNumber: 0
    });
  }

  renderSquare(i) {
    return (
      <Square
        data-id={ i }
        value={ this.state.squares[i] }
        onClick={ () => this.handleClick(i) }
      />
    );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let moveNumber = prevState.started && !nextProps.process.started
      ? 0
      : prevState.moveNumber
    return {
      squares: nextProps.process.squares,
      winner: nextProps.process.winner,
      started: nextProps.process.started,
      moveNumber
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
