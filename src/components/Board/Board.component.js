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
      squares
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares }, this.AImove);
  }

  AImove() {
    const squares = this.state.squares.slice();
    const AIsign = 'O'
    const bestIndex = AI.minimax(squares, AIsign).index

    squares[bestIndex] = AIsign;
    this.setState({ squares });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
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
