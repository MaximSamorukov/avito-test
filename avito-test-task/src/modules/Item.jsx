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
      title, by, score, type, url, descendants,
    } = news;
    console.log(news);
    return (
      <div className="item-container">
        <div className="item-body">
          <div className="first-line">
            <div className="item-title">{title}</div>
            <div className="item-author">{`Author: ${by}`}</div>
          </div>
          <div className="second-line">
            <div className="iten-anchor"><a href={url}>Link</a></div>
            <div className="item-type">{`Type: ${type}`}</div>
          </div>
          <div className="third-line">
            <div className="item-score">{`Score: ${score}`}</div>
            <div className="item-comments">{`Comments: ${descendants}`}</div>
          </div>
        </div>
      </div>
    );
  }
}
Item.defaultProps = {
  news: {},
};

Item.propTypes = {
  news: PropTypes.checkPropTypes(),
};

export default Item;
