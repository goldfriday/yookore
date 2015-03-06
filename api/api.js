var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var User = require('./models/User.js')
var Statusupdate = require('./models/Statusupdate.js')
// var jwt = require('./services/jwt.js')
var jwt = require('jwt-simple')

var app = express();
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	next();
});


app.post('/register', function(req,res){
	var user = req.body;

	var newUser = new User({
		password: user.password,
		username: user.username,
		lastname: user.lastname,
		email: user.email
	})
	newUser.save(function(err){
		createSendToken(newUser,res)
	})



})
// /* POST / Create Status Update. */
// app.post('/statusupdate/', function(req, res) {

//     var statusupdate = req.body;

//     var newStatusupdate = new Statusupdate({
//         content: statusupdate.content,
//         authorid: statusupdate.authorid,
//         location: statusupdate.location
//     })
//     newStatusupdate.save(function(err) {
//         res.json(statusupdate);
//         console.log("New status update created")
//          if (err) return next(err);

//     })

// })
/* GET / List Status Updates. */

app.post('/api/status_updates/post/username/', function(req, res) {
    req.statusupdate = req.body;
    Statusupdate.create(req.body,function(err, statusupdate) {
        if (err) return next(err);
        res.json(statusupdate);
    });
});
/* GET / List Status Updates. */

app.get('/api/status_updates/post/username/', function(req, res) {
    req.statusupdate = req.body;
    Statusupdate.find(function(err, statusupdate) {
        if (err) return next(err);
        res.json(statusupdate);
    });
});

/* GET / List Status Update with id. */

app.get('/api/status_updates/post/username/:id', function(req, res) {
    req.statusupdate = req.body;
    Statusupdate.findById(req.params.id, function(err, statusupdate) {
        if (err) return next(err);
        res.json(statusupdate);
    });
});


/* PUT / List Status Update with id. */

app.put('/api/status_updates/post/username/:id', function(req, res, next) {
    // req.statusupdate = req.body;
    Statusupdate.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


/* DELETE / List Status Update with id. */

app.delete('/api/status_updates/post/username/:id', function(req, res) {
    // req.statusupdate = req.body;
    Statusupdate.findByIdAndRemove(req.params.id, req.body, function(err, statusupdate) {
        if (err) return next(err);
        res.json(statusupdate);
       console.log("New status update Removed") 

    });
});


app.post('/login', function(req,res){
	req.user = req.body;
	var searchUser= {
		email: req.user.email
	};

	User.findOne(searchUser, function(err, user){
		if (err) throw err

		if (!user)
			res.status(401).send({message: 'Wrong email/password'});

	    user.comparePasswords(req.user.password, function(err, isMatch){
	    	if(err) throw err;

	    	if(!isMatch)
	    		return res.status(401).send({message: 'Wrong email/password'});
	    		createSendToken(user,res);
	    });
	})
})

function createSendToken(user,res) {
	var payload = {
		sub: user.id
	}


	var token = jwt.encode(payload,"sososos");

	res.status(200).send({
		user: user.toJSON(),
		token: token
	});

}
// var username = "Paul Imisi";

// var statusupdate = [{
//     content:  "ANC members were allegedly paid nearly R1-million to vote for Durban mayor James Nxumalo as the party's eThekwini chairman.", 
//     authorid: username , 
//     location: "Randburg"
// },
// {
//     content:  "If you work in any organisation or firm, always strive to make sure that you grow the company to become successful as against stealing from the business. Think of this, if we all steal from the companies we work in and the businesses crumbles, I mean we wont have jobs and therefore we wont be able to take care of our basic needs....the success of every business in Nigeria should be our PRIDE as Nigerians. Let's all work together and ensure that individual businesses strive in our country against all odds cos I know some of us no matter what can't start up or run businesses because we love and enjoy been employees which is great as long as you are good at what you do....lets build more successful busineses in Nigeria ‪#‎letsbuild‬", 
//     authorid: username, 
//     location: "Randburg"
// }];

// app.get('/statusupdate/list', function(req, res) {
//     req.statusupdate = req.body;
//     Statusupdate.find(function(err, statusupdate) {
//         if (err) return next(err);
//         res.json(statusupdate);
//     });
// });


	// if(!req.headers.authorization){
	// 	return res.status(401).send({
	// 		message:'You are not authorized'
	// 	});
	// }
	// var token = req.headers.authorization.split('')[1];
	// var payload = jwt.decode(token,"sososos");

	// if(!payload.sub) {
	// 	res.status(401).send({
	// 		message: 'Authentication failed'
	// 	});
	// }





mongoose.connect('mongodb://localhost/yookore');
console.log(jwt.encode('hi','secret'));

var server = app.listen(3000, function() {
	console.log('api listening on', server.address().port);
})