import React from 'react';
import PropTypes from 'prop-types';
import './styles/item-style.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { news } = this.props;
    const {
      title, by, score, type, url,
    } = news;
    // console.log(news);
    return (
      <div className="item-container">
        {`${type}; ${title}; ${by}; ${url}; ${score}`}
      </div>
    );
  }
}

Item.propTypes = {
  news: PropTypes.func.isRequired,
};

export default Item;
