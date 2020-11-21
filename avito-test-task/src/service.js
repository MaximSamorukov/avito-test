const axios = require('axios');

// const howManyNews = 15;

async function getData(arr = []) {
  const url = 'https://hacker-news.firebaseio.com/v0/';
  // const number = await axios({
  //   method: 'get',
  //   url: `${url}maxitem.json?print=pretty`,
  //   print: 'pretty',
  // });
  // const lastNumber = num === 'notyet' ? number.data : num;
  const newsArray = arr.length === 0 ? [] : arr;

  const getNews = async () => {
    try {
      // console.log("2");
      const response = await axios({
        method: 'get',
        // url: `${url}item/${ln}.json?print=pretty`,
        url: `${url}newstories.json?print=pretty`,
        // print: 'pretty',
      });
      // console.log("3");
      // console.log(response.data.type);
      // console.log(ln - 1);
      // console.log("4");
      // console.log(response.data.type === 'story');
      // if (response.data.type === 'story') {
        // console.log("5'");
      newsArray.push(response);
      // console.log("6");

      // console.log(lastNumber);
      // console.log("7");
      // console.log(lastNumber);
      return;
    } catch (e) {
      console.log(e);
    }
  };
  // console.log(lastNumber);
  getNews();
  // console.log(newsArray.length <= howManyNews);
  // if (newsArray.length < howManyNews) {
  //   // console.log('hi');
  //   getData(lastNumber - 1, newsArray);
  // }
  // if (newsArray.length >= howManyNews) {
  //   console.log(newsArray);
  //   return newsArray;
  // }
  console.log(newsArray);
  return newsArray;
}

module.exports = getData;
