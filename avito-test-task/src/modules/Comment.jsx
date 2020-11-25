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
      showComment: false,
    };
  }

  componentDidMount() {
    const { item } = this.props;
    console.log(this);
    this.getComment(item);
  }

  onclick = () => () => {
    const { showComment } = this.state;
    this.setState({ showComment: !showComment });
  }

  async getComment(number) {
    const item = async (n) => {
      const i = await getItem(n);
      return i;
    };
    const comment = await item(number);
    await this.setState({ comment });
  }

  render() {
    const { level } = this.props;
    const newLevel = level + 1;
    const { showComment, comment } = this.state;
    const options = {
      year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',
    };
    const {
      by, text, time, kids,
    } = comment;
    const comments = Array.isArray(kids) ? kids.length : 0;
    return (
      <div className="comment-container">
        <div className={`main-comment comment-level-${level}`}>
          <div className="first-line">
            <div className="comment-by">{by}</div>
            <div className="comment-time">{new Date(time * 1000).toLocaleDateString('en', options)}</div>
          </div>
          <div className="second-line">
            <div className="comment-text" dangerouslySetInnerHTML={{ __html: text }} />
          </div>
          <div className="third-line">
            <div onClick={this.onclick()} onKeyDown={this.onclick()} tabIndex={0} role="button" className="comment-comments">{`Comments: ${comments} `}</div>
          </div>
        </div>
        {(kids && kids.length > 0 && showComment)
        && kids.map((i) => <Comment item={i} level={newLevel} />)}
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
