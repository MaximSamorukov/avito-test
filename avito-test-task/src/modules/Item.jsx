import React from 'react';
import './styles/item-style.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const l = 'haha';
    return (
      <div className="item-container">
        {l}
      </div>
    );
  }
}

export default Item;
