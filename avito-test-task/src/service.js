const axios = require('axios');

// const howManyNews = 100;

async function getData() {
  const url = 'https://hacker-news.firebaseio.com/v0/';
  const number = await axios({
    method: 'get',
    url: `${url}maxitem.json`,
    print: 'pretty',
  });
  let lastNumber = number.data;
  // const prevNumber = lastNumber - howManyNews;
  const newsArray = [];
  while (newsArray.length <= 100) {
    console.log(newsArray.length);
    // let i
    axios({
      method: 'get',
      url: `${url}item/${lastNumber}.json`,
      print: 'pretty',
    })
      .then((response) => {
        console.log(response.data.type === 'story');
        // if (response.data.type === 'story') {
        newsArray.push(response);
        // }
      });
    lastNumber -= 1;
  }
  // console.log(newsArray);
  // const news = await axios({
  //   method: 'get',
  //   url: `${url}item/${i}`,
  //   print: 'pretty',
  // });

  // newsArray = await newsArray.map(async (i) => {
  //   const news = await axios({
  //     method: 'get',
  //     url: `${url}item/${i}.json`,
  //     print: 'pretty',
  //   });
  //   console.log(`${news.data.type} ${i}`);
  //   return news;
  // });
  // await console.log(newsArray);
  return newsArray;
}

module.exports = getData;
