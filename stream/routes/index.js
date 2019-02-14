var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/read', (req,res) => {
  console.log('Streaming large file');
  let stream;
  try {
    const file = '/Users/jay/git_jay/expressjs/stream/files/file.json';
    //const file = 'stream/files/file.json';
    stream = fs.createReadStream(file);    
  } catch(error){
    console.error('er :: ', error);
  } 

  console.log('piping');
  stream.pipe(res);
  console.log('done...');
})

module.exports = router;
