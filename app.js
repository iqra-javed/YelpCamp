const express = require('express');
const app = express();

const campgrounds = [
  {
    name: 'Niagara Falls KOA Holiday',
    image:
      'https://www.google.com/maps/uv?hl=en&pb=!1s0x89d344f051b4ce65%3A0xc5287ab114b08dbe!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMhN1A-iq4hyTdJ4yxKqmfFPWKcVIXQd2xg10B3%3Dw520-h350-n-k-no!5scampgrounds%20in%20canada%20-%20Google%20Search!15sCAQ&imagekey=!1e10!2sAF1QipMhN1A-iq4hyTdJ4yxKqmfFPWKcVIXQd2xg10B3#'
  },
  {
    name: 'Hickory Creek Campground',
    image:
      'https://www.google.com/maps/uv?hl=en&pb=!1s0x864c33af956ef325%3A0x8c58322174634033!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOtgDQFp2t7uK3lLERiv8QpwWU1o0lGi-Y6EtbD%3Dw260-h174-n-k-no!5scampgrounds%20in%20Texas%20-%20Google%20Search&imagekey=!1e2!2sZuvLBr1_36YBBlE0Eoimdw#'
  },
  {
    name: 'Kirk Creek Campground',
    image:
      'https://www.google.com/maps/uv?hl=en&pb=!1s0x80929badc6463c97%3A0x754a4f7385e3e64c!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOy1dZkjdeM04MlAvO5ZiWtiTCBgdvWML3j8U4S%3Dw520-h350-n-k-no!5scampgrounds%20in%20california%20-%20Google%20Search!15sCAQ&imagekey=!1e10!2sAF1QipOy1dZkjdeM04MlAvO5ZiWtiTCBgdvWML3j8U4S#'
  }
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/campgrounds', (req, res) => {
  res.render('campgrounds', {campgrounds: campgrounds});
});

app.listen(3000, () => {
  console.log('YelpCamp Server Has Started!');
});
