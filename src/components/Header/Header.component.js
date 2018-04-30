import React from 'react';
import './Header.less';

export class HeaderComponent extends React.Component {
  constructor(props) {
    super();
    console.log('object', props);
  }

  render() {
    return (
      <header>
        <div className="menu">
          <a
            href="javascript:;"
            onClick={ () => this.props.resetGame() }
          >New game</a>
        </div>
      </header>
    )
  };
}
