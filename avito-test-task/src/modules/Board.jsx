import React from 'react';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';
import { getData } from '../service';
import './styles/board-style.css';
import ItemToShow from './ItemToShow';

const _ = require('lodash');

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.getNews = this.getNews.bind(this);
    this.state = {
      itemToShow: {},
      newsItem: [],
      showPage: false,
      firstPage: 0,
      lastPage: 100,
    };
  }

  async componentDidMount() {
    const { firstPage, lastPage } = this.state;
    const array = await getData();
    console.log(firstPage);
    const news = await array.slice(firstPage, lastPage);
    this.setState({ newsItem: news });
  }

  async getNext() {
    // console.log(e);
    const { lastPage } = this.state;
    console.log(`lastpage: ${lastPage}`);
    const newFirstPage = lastPage === 500 ? 0 : lastPage;
    const newLastPage = newFirstPage + 100;
    console.log(`newFP: ${newFirstPage}`);
    console.log(`newLP: ${newLastPage}`);
    this.setState({ firstPage: newFirstPage, lastPage: newLastPage });
    const array = await getData();
    const news = await array.slice(newFirstPage, newLastPage);
    this.setState({ newsItem: news });
  }

  async getNews() {
    const { firstPage, lastPage } = this.state;
    const array = await getData();
    const news = await array.slice(firstPage, lastPage);
    this.setState({ newsItem: news });
  }

  getBack() {
    this.setState({ showPage: false });
  }

  render() {
    const { newsItem, showPage, itemToShow } = this.state;
    const options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
    };
    const getItemData = (data) => () => {
      this.setState({
        itemToShow: data,
        showPage: true,
      });
    };

    if (showPage) {
      // const {
      //   title, by, score, type, url, descendants, time,
      // } = itemToShow;
      return (
        <>
          <Header getItemsFromStore={this.getNews} />
          <div className="board-container">
            <ItemToShow data={itemToShow} />
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
