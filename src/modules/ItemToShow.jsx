import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import { getItem } from '../service';
import './styles/item-page-style.css';

class ItemToShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: true,
      item: {},
      isUpdate: false,
    };
  }

  async componentDidMount() {
    const { data } = this.props;
    const { id } = data;
    const updateItem = async (item) => {
      const newItem = await getItem(item);
      await this.setState({ item: newItem });
      await this.setState({ isUpdate: true });
    };
    const storage = window.localStorage;
    const keyPage = window.setInterval(updateItem(id), 60000);
    storage.setItem('keyPage', keyPage);
  }

  componentWillUnmount() {
    const storage = window.localStorage;
    const key = storage.getItem('keyPage');
    storage.setItem('keyPage', null);
    window.clearInterval(key);
  }

  onclick = () => () => {
    const { showComments } = this.state;
    this.setState({ showComments: !showComments });
  }

  getDataOnItem = async (n) => {
    const i = await Promise.resolve(n);
    return i;
  }

  render() {
    const { showComments, item, isUpdate } = this.state;
    let { data } = this.props;
    const { btn } = this.props;
    if (isUpdate) {
      data = item;
    }
    const options = {
      year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',
    };
    let kids = [];
    const {
      title, by, score, url, descendants, time,
    } = data;

    if (descendants > 0) {
      kids = data.kids;
    }
    const comments = parseInt(descendants, 10) > 1000 ? 'many' : descendants;
    return (
      <div className="item-container">
        <div className="page-container">
          <div className="first-line">
            <div className="page-font page-title-font page-title" dangerouslySetInnerHTML={{ __html: title }} />
            <div className="page-font page-time-font page-time">{new Date(time * 1000).toLocaleDateString('en', options)}</div>
          </div>
          <div className="second-row">
            <div className="page-font page-by-font page-by">{`Author: ${by}`}</div>
            <div className="page-font page-score-font page-score">{`Score: ${score}`}</div>
          </div>
          <div className="second-line">
            <div className="page-font page-url-font page-url"><a href={url}>{url}</a></div>
          </div>
          <div className="third-row">
            <div className="fourth-row">
              <div className="page-font page-font page-descendants-font page-descendants" onClick={this.onclick()} onKeyDown={this.onclick()} tabIndex={0} role="button">{`Comments: ${comments} `}</div>
              <div className="page-font page-kids-font page-kids">{` First level comments: ${kids.length}`}</div>
            </div>
            <div className="page-back">{btn}</div>
          </div>
        </div>
        {(kids.length > 0 && showComments)
          && kids.map((i) => <Comment item={i} level={1} />)}
        {(kids.length > 0 && showComments) && <div className="btn-page-line" />}
      </div>
    );
  }
}
ItemToShow.defaultProps = {
  data: {},
  btn: '',
};

ItemToShow.propTypes = {
  data: PropTypes.checkPropTypes(),
  btn: PropTypes.checkPropTypes(),
};

export default ItemToShow;
