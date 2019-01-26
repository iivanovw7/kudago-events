const express = require('express');
const app = express();
const port = process.env.PORT || 5959;
const bodyParser = require("body-parser");
const axios = require('axios');
const moment = require('moment');


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Setting up app to listen Port
app.listen(port, () => console.log(`Listening on port ${port}`));

//Rendering production build

const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.use(['/home'], (req, res) => {

  res.sendFile(path.join(__dirname, './dist/index.html')), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  }
});



const EVENTS_URL = `https://kudago.com/public-api/v1.2/events/`;


app.get('/api/events', (req, response) => {

  function getEvents() {

    let Date = moment();


    let params = {
      fields: 'id,title,location,place,dates,images',
      page: req.query.pageNumber,
      page_size: 100,
      //actual_since: Date.unix(),
      //actual_until: nextDate.unix(),
      order_by: '-publication_date',
      expand: 'images, location'

    };

    return axios.get(EVENTS_URL, {params: params}).then(response => {
      //console.log(response.data);
      return response.data
    })
  }

  getEvents().then(data => {
    response.json({ message: 'Request received!', data })
  });

});


app.get('/api/event', (req, response) => {

  function getEvents() {

    console.log(req.query.id);


    let params = {
      id: req.query.id
    };


    return axios.get(`${EVENTS_URL}${params.id}/`).then(response => {
      console.log(response.data);
      return response.data
    })
  }

  getEvents().then(data => {
    response.json({ message: 'Request received!', data })
  });

});



