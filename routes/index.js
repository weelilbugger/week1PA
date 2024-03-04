var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var MEANS=[
    {name: 'MongoDB:', def:'"MongoDB is an open source, NoSQL database designed for cloud applications. It uses object-oriented organization instead of a relational model. (IBM)'},
    {name: 'Express:', def:'"Express is a web application framework for Node.js. It balances ease of use and a full feature set.(IBM)"'},
    {name: 'Angular:', def:'"AngularJS—Google’s JavaScript frontend framework... It is effectively the default for frontend JavaScript development.(IBM)"'},
    {name: 'Node.js:', def:'"Node.js is an open source JavaScript framework that uses asynchronous events to process multiple connections simultaneously. (IBM)"'},
  ];

  var myname = "Mattias";

  res.render('index', {
    title: 'MEAN Stack',
    MEANS: MEANS,
    myname: myname
  });
});

module.exports = router;
