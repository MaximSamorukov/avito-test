import React from 'react';
import Item from './Item';
import { getData, getItem } from '../service';
import './styles/board-style.css';

const _ = require('lodash');

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // news: '',
      newsItem: [],
    };
  }

  async getNews() {
    const item = async (n) => {
      const i = await getItem(n);
      // console.log(i);
      return i;
    };
    const array = await getData();
    // this.setState({ news: array });
    // let { news } = await this.state;
    // console.log(array);
    const news = array.slice(0, 100);
    const newsNew = await news.map(async (i) => {
      const r = await item(i);
      // console.log(r);
      return r;
    });

    // elements теперь промисы и нам нужно дождаться их выполнения
    const r = await Promise.all(newsNew);
    // .then((results) => new Promise((resolve) => {
    //   asyncFn(results, resolve);
    // }))
    // .then((i) => t.push(i));
    // }
    console.log(r);

    this.setState({ newsItem: r });
  }

  render() {
    const { newsItem } = this.state;
    // console.log(newsItem);
    // newsItem.map((i) => console.log(i));
    return (
      <div className="board-container">
        <div role="button" tabIndex={0} onClick={this.getNews.bind(this)} onKeyDown={this.getNews} className="btn">Click</div>
        {newsItem.length > 0 && newsItem.map((i) => <Item key={_.uniqueId('key_')} news={i} />)}
      </div>
    );
  }
}

export default Board;
