import React from 'react';
import Item from './Item';
import getData from '../service';
import './styles/board-style.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    getData();
    return (
      <div className="board-container">
        <Item />
      </div>
    );
  }
}

export default Board;
