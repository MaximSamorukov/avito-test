import React from 'react';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';
import { getData } from '../service';
import './styles/board-style.css';

const _ = require('lodash');

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.getNews = this.getNews.bind(this);
    this.state = {
      itemToShow: {},
      newsItem: [],
      showPage: false,
    };
  }

  async componentDidMount() {
    const array = await getData();
    const news = await array.slice(0, 100);
    this.setState({ newsItem: news });
  }

  getNext(e) {
    console.log(e);
    console.log(this);
  }

  async getNews() {
    const array = await getData();
    const news = await array.slice(0, 100);
    this.setState({ newsItem: news });
  }

  getBack() {
    this.setState({ showPage: false });
  }

  render() {
    const { newsItem, showPage, itemToShow } = this.state;
    const getItemData = (data) => () => {
      this.setState({
        itemToShow: data,
        showPage: true,
      });
    };

    if (showPage) {
      const {
        title, by, score, type, url, descendants, time,
      } = itemToShow;
      return (
        <>
          <Header getItemsFromStore={this.getNews} />
          <div className="board-container">
            <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
            <div className="by">{by}</div>
            <div className="score">{score}</div>
            <div className="type">{type}</div>
            <div className="url">{url}</div>
            <div className="descendants">{descendants}</div>
            <div className="time">{time}</div>
            <div className="back-btn" role="button" tabIndex={0} onClick={this.getBack.bind(this)} onKeyDown={this.getBack.bind(this)}>Back</div>
            <div className="btn-line" />
          </div>
          <Footer />
        </>
      );
    }

    return (
      <>
        <Header getItemsFromStore={this.getNews} />
        <div className="board-container">
          {newsItem.length > 0 && newsItem.map((i) => <Item key={_.uniqueId('key_')} news={i} func={getItemData} />)}
          {newsItem.length > 0 && <div role="button" tabIndex={0} onClick={this.getNext.bind(this)} onKeyDown={this.getNext} className="btn-next">More</div>}
          <div className="btn-line" />
        </div>
        <Footer />
      </>
    );
  }
}

export default Board;
