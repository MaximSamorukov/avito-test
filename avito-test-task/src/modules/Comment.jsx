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
    const { item } = this.props;
    const { showComment } = this.state;
    if (showComment) {
      this.getComment(item);
    }
    const { comment } = this.state;
    console.log(comment);
    const {
      by, text, type, time, kids,
    } = comment;
    console.log(kids);
    return (
      <div onClick={this.onclick} onKeyDown={this.onclick} tabIndex={0} role="button" className="comment-container">
        <div className="main-comment">
          <div className="comment-by">{by}</div>
          <div className="comment-type">{type}</div>
          <div className="comment-time">{new Date(time).getHours()}</div>
          <div className="comment-text">{text}</div>
        </div>
        {(kids && kids.length > 0) && kids.map((i) => <Comment item={i} />) }
      </div>
    );
  }
}

Comment.defaultProps = {
  item: [],
};

Comment.propTypes = {
  item: PropTypes.checkPropTypes(),
};
export default Comment;
