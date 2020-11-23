import React from 'react';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';
import { getData, getItem } from '../service';
import './styles/board-style.css';

const _ = require('lodash');

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.getNews = this.getNews.bind(this);
    this.state = {
      newsItem: [],
    };
  }

  getNext(e) {
    console.log(e);
    console.log(this);
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
      <>
        <Header getItemsFromStore={this.getNews} />
        <div className="board-container">
          {newsItem.length > 0 && newsItem.map((i) => <Item key={_.uniqueId('key_')} news={i} />)}
          {newsItem.length > 0 && <div role="button" tabIndex={0} onClick={this.getNext.bind(this)} onKeyDown={this.getNext} className="btn-next">More</div>}
          <div className="btn-line" />
        </div>
        <Footer />
      </>
    );
  }
}

export default Board;
