import React from 'react';
import Item from './Item';
import { getData, getItem } from '../service';
import './styles/board-style.css';

const _ = require('lodash');

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItem: [],
    };
  }

  async getNews() {
    const item = async (n) => {
      const i = await getItem(n);
      return i;
    };
    const array = await getData();
    const news = array.slice(0, 100);
    const newsNew = await news.map(async (i) => {
      const r = await item(i);
      return r;
    });
    const list = await Promise.all(newsNew);
    this.setState({ newsItem: list });
  }

  render() {
    const { newsItem } = this.state;
    return (
      <div className="board-container">
        <div role="button" tabIndex={0} onClick={this.getNews.bind(this)} onKeyDown={this.getNews} className="btn">Click</div>
        {newsItem.length > 0 && newsItem.map((i) => <Item key={_.uniqueId('key_')} news={i} />)}
      </div>
    );
  }
}

export default Board;
