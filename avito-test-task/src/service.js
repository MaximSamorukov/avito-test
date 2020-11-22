const axios = require('axios');

async function getData() {
  const url = 'https://hacker-news.firebaseio.com/v0/';
  let newsArray = [];

  const getNews = async () => {
    try {
      const response = await axios({
        method: 'get',
        // url: `${url}item/${ln}.json?print=pretty`,
        url: `${url}newstories.json`,
        params: {
          print: 'pretty',
        },
      });
      newsArray = (response.data);
    } catch (e) {
      console.log(e);
    }
  };
  await getNews();
  return newsArray;
}

const getItem = async (number) => {
  // console.log(number);
  const url = 'https://hacker-news.firebaseio.com/v0/';
  let item;
  const getNews = async (num) => {
    try {
      const response = await axios({
        method: 'get',
        url: `${url}item/${num}.json`,
        params: {
          print: 'pretty',
        },
      });
      item = await response.data;
    } catch (e) {
      console.log(e);
    }
  };
  await getNews(number);
  return item;
};

module.exports = { getData, getItem };
