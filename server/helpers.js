const axios = require('axios');
const config = require('./config.js');

// let requestToken = (id, secret) => {
//   let options = {
//     url: 'https:',
//     headers: {
//       'Authorization': `Basic ${Buffer.from(config.client_id+':'+config.client_secret).toString('base64')}`,
//       'Content-Type':'application/x-www-form-urlencoded'
//     },
//     data: 'grant_type=client_credentials'
//   }

//   axios({
//     method: 'post',
//     url: options.url,
//     data: options.data,
//     headers: options.headers
//   })
//     .then((res) => {
//       console.log('RESPONSE: ', res);
//     })
//     .catch((err) => {
//       console.error(err);
//     })
// }

// requestToken();

let helperfunc = (user, cb) => {
  // TODO - Use the axios module to request data
  let options = {
    url: `https://api.github.com/users/${user}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'Content-Type': 'application/json',
    }
  };

  axios.get(options.url, {headers: options.headers})
    .then((res) => {
      // console.log('Response from Axios GET: ',res);
     cb(null,res);
    })
    .catch((err) => {
      console.log('Error with GET: ', err);
      cb(err);
    })
}
// console.log(helperfunc('input'));
module.exports.helperfunc = helperfunc;