/* eslint class-methods-use-this: ["error", { "exceptMethods": ["getComment"] }] */

import React from 'react';
import PropTypes from 'prop-types';
import { getItem } from '../service';
import './styles/comment-style.css';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {},
      showComment: true,
    };
  }

  onclick = (e) => {
    console.log(e);
  }

  async getComment(number) {
    this.setState({ showComment: false });
    console.log(number);
    const item = async (n) => {
      const i = await getItem(n);
      return i;
    };
    const comment = await item(number);
    await this.setState({ comment });
  }

  render() {
    const { item, level } = this.props;
    const { showComment } = this.state;
    if (showComment) {
      this.getComment(item);
    }
    const { comment } = this.state;
    const options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
    };
    const {
      by, text, type, time, kids,
    } = comment;
    console.log(kids);
    return (
      <div onClick={this.onclick} onKeyDown={this.onclick} tabIndex={0} role="button" className="comment-container">
        <div className={`main-comment comment-level-${level}`}>
          <div className="comment-by">{by}</div>
          <div className="comment-type">{type}</div>
          <div className="comment-time">{new Date(time * 1000).toLocaleDateString('en', options)}</div>
          <div className="comment-text" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
        {(kids && kids.length > 0) && kids.map((i) => <Comment item={i} level={level + 1} />) }
      </div>
    );
  }
}

Comment.defaultProps = {
  item: [],
  level: 1,
};

Comment.propTypes = {
  item: PropTypes.checkPropTypes(),
  level: PropTypes.checkPropTypes(),
};
export default Comment;
