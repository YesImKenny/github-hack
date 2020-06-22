const express = require('express');
const bodyParser = require('body-parser')
const helper = require('./helpers.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('500: Something broke!')
})

app.post('/route', function (req, res) {
  // TODO - your code here!
});
app.get('/users', function (req, res) {
  // TODO - code here!
  let getData = new Promise((resolve, reject) => {
    helper.helperfunc(req.query.user, (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(result.data);
      }
    })
  })
  getData.then((data) => {
    let filteredUserData = {};
    filteredUserData['avatar_url'] = data['avatar_url'];
    filteredUserData['followers'] = data['followers'];
    filteredUserData['following'] = data['following'];
    filteredUserData['followers_url'] = data['followers_url'];
    filteredUserData['following_url'] = data['following_url'];
    res.send(filteredUserData);
  })
  .catch((err) =>{
    console.error(err);
  })
});


app.use(function (req, res, next) {
  res.status(404).send("404: Sorry can't find that!")
})

let port = 3333;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = app;