const express = require('express')
const router = express.Router()

//import node-fetch fetch function
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));


router.get('/coinsAPI', async(req, res) => {

  const url = 'https://api.coinranking.com/v2/coins'

  const options = {
    method: 'GET',
    headers: {
      'x-access-token': 'coinranking0cbb5f52513d1331099aac0ef918c97baed5ac4f31ba5250'
    }
  }

  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log('error:'+err))

  try{
    let response = await fetch(url, options);
		response = await response.json();
		res.status(200).json(response);
  }
  catch (err) {
    console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
  }
})

module.exports = router