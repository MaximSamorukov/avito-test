import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import { getItem } from '../service';
import './styles/item-style.css';

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
    const { showComments, item, isUpdate } = this.state;
    let { data } = this.props;
    // console.log(data);
    if (isUpdate) {
      data = item;
    }
    const options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
    };
    let kids = [];
    const {
      title, by, score, type, url, descendants, time,
    } = data;

    if (descendants > 0) {
      kids = data.kids;
    }
    const comments = parseInt(descendants, 10) > 1000 ? 'many' : descendants;
    return (
      <div className="item-container">
        <div className="page-container">
          <div className="page-title" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="page-time">{new Date(time * 1000).toLocaleDateString('en', options)}</div>
          <div className="page-by">{by}</div>
          <div className="page-score">{score}</div>
          <div className="page-type">{type}</div>
          <div className="page-url">{url}</div>
          <div className="page-kids">{` Kids: ${kids.length}`}</div>
          <div className="page-descendants" onClick={this.onclick(kids)} onKeyDown={this.onclick(kids)} tabIndex={0} role="button">{`Comments: ${comments} `}</div>
        </div>
        {(kids.length > 0 && showComments)
          && kids.map((i) => <Comment item={i} level={1} />)}
      </div>
    );
  }
}
ItemToShow.defaultProps = {
  data: {},
};

ItemToShow.propTypes = {
  data: PropTypes.checkPropTypes(),
};

export default ItemToShow;
