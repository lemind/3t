import React from 'react';
import './Square.less';

export class SquareComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.value) {
      return {
        value: nextProps.value
      }
    }
    return null
  }

  render() {
    return (
      <div className="square">
        <button
          className="square__button"
          onClick={() => this.props.onClick()}
        >
          { Number.isInteger(this.state.value)
            ? ''
            : this.state.value }
        </button>
      </div>
    )
  };
}
