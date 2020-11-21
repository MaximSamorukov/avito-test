import React from 'react';
import Item from './Item';
import getData from '../service';
import './styles/board-style.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  async getNews() {
    const array = await getData();
    await this.setState({ news: array });
    // const { news } = this.state;
    console.log(array);
  }

  render() {
    const { news } = this.state;
    console.log(news);
    // news.map((i) => console.log(i));
    return (
      <div className="board-container">
        <div role="button" tabIndex={0} onClick={this.getNews.bind(this)} onKeyDown={this.getNews} className="btn">Click</div>
        <Item news={news} />
      </div>
    );
  }
}

export default Board;
