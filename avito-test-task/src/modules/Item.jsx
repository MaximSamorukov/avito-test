import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './styles/item-style.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
    };
  }

  onclick = (kids) => (e) => {
    console.log(kids);
    console.log(e.target);
    const { showComments } = this.state;
    this.setState({ showComments: !showComments });
  }

  render() {
    const { showComments } = this.state;
    const { news } = this.props;
    let kids = [];
    const {
      title, by, score, type, url, descendants, time,
    } = news;
    if (descendants > 0) {
      kids = news.kids;
    }
    // console.log(descendants);
    // console.log(typeof descendants);
    // console.log(parseInt(descendants, 10) > 1000);
    const comments = parseInt(descendants, 10) > 1000 ? 'many' : descendants;
    // console.log(news);
    return (
      <div className="item-container">
        <div className="item-body">
          <div className="first-line">
            <div className="item-element item-title">{title}</div>
            <div className="item-element item-author">{`Author: ${by}`}</div>
            <div className="item-element item-time">{new Date(time).getHours()}</div>
          </div>
          <div className="second-line">
            <div className="item-element item-anchor"><a href={url}>Link</a></div>
            <div className="item-element item-type">{`Type: ${type}`}</div>
          </div>
          <div className="third-line">
            <div className="item-element item-score">{`Score: ${score}`}</div>
            <div onClick={this.onclick(kids)} onKeyDown={this.onclick(kids)} tabIndex={0} role="button" className="item-element item-comments">{`Comments: ${comments} `}</div>
            <div className="item-element item-kids">{` Kids: ${kids.length}`}</div>
          </div>
        </div>
        {(kids.length > 0 && showComments) && kids.map((i) => <Comment item={i} />)}
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
