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
  res.setHeader('Content-disposition', 'attachment; filename=large.json')
  try {
    const file = '/Users/jay/git_jay/expressjs/stream/files/file.json';
    stream = fs.createReadStream(file);    
  } catch(error){
    console.error('er :: ', error);
  } 

  console.log('piping');
  stream.pipe(res);
  console.log('done...');
})



router.get('/write', (req,res) => { 
    console.log('writing...');
  try {
    const stream = fs.createWriteStream('./writen.txt');
    stream.write('test msg.');
    res.send('contents written to file ...')     
  } catch (error) {
    console.error(error);
  }  
})

module.exports = router;
