import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import { getItem } from '../service';
import './styles/item-style.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
      item: {
        title: '', by: '', score: 0, type: '', url: '', descendants: 0, time: 0,
      },
    };
  }

  componentDidMount() {
    const { news } = this.props;
    const newItem = getItem(news);
    newItem.then((i) => {
      this.setState({ item: i });
    });
  }

  onclick = (kids) => (e) => {
    console.log(kids);
    console.log(e.target);
    const { showComments } = this.state;
    this.setState({ showComments: !showComments });
  }

  getDataOnItem = async (n) => {
    const i = await Promise.resolve(n);
    return i;
  }

  render() {
    const { item, showComments } = this.state;
    const { func } = this.props;
    const options = {
      year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',
    };
    let kids = [];
    const {
      title, by, score, url, descendants, time,
    } = item;
    if (descendants > 0) {
      kids = item.kids;
    }
    const comments = parseInt(descendants, 10) > 1000 ? 'many' : descendants;
    return (
      <div className="item-container">
        <div className="item-body">
          <div className="first-line">
            <div className="item-element item-title" onClick={func(item)} onKeyDown={func(item)} tabIndex={0} role="button">{title}</div>
            <div className="item-element item-time">{new Date(time * 1000).toLocaleDateString('en', options)}</div>
          </div>
          <div className="second-line">
            <div className="item-element item-author">{`Author: ${by}`}</div>
            <div className="item-element item-anchor"><a href={url}>Link</a></div>
          </div>
          <div className="third-line">
            <div onClick={this.onclick(kids)} onKeyDown={this.onclick(kids)} tabIndex={0} role="button" className="item-element item-comments">{`Comments: ${comments} `}</div>
            <div className="item-element item-score">{`Score: ${score}`}</div>
          </div>
        </div>
        {(kids.length > 0 && showComments) && kids.map((i) => <Comment item={i} level={1} />)}
      </div>
    );
  }
}
Item.defaultProps = {
  news: {},
  func: {},
};

Item.propTypes = {
  news: PropTypes.checkPropTypes(),
  func: PropTypes.checkPropTypes(),
};

export default Item;
