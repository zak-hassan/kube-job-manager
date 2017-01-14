var express = require('express');
var app = express();
var promise = require('request-promise');

var app_rest_location = process.env.OPENSHIFT_APP_REST || 'localhost' //'10.16.40.63';
var app_rest_port = process.env.OPENSHIFT_APP_REST_PORT || '18080';
var app_web_debug = process.env.OPENSHIFT_APP_WEB_DEBUG || false;
var metadata_registry_api = 'http://' + app_rest_location + ":" + app_rest_port;

app.configure(function() {
    app.use(express.logger());
    app.set('views', __dirname + '/');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/'));
    app.use('/bower_components', express.static(__dirname + '/bower_components'));
    app.use(app.router);
    app.engine('html', require('ejs').renderFile);
});


/*
GET ALL SCHEAM's
This node js is a proxy to the metadata microservice running in a separate container.
*/
app.get('/api/schema', function(req, res) {

    var options = {
        method: 'GET',
        uri: metadata_registry_api + '/api/schema',
        headers: {
            'User-Agent': 'Kubernetes-Microservice-FrontEnd',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        json: true
    };

    promise(options)
        .then(function(json) {
            console.log(json);
            res.send(json);
        }).catch(function(err) {
            console.log(err);
            res.send(err);
        });
});

/*
GET SCHEMA BY ID
*/
app.get('/api/schema/:id', function(req, res) {
    var options = {
        method: 'GET',
        uri: metadata_registry_api + '/api/schema' + '/' + req.params.id,
        headers: {
            'User-Agent': 'Kubernetes-Microservice-FrontEnd',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        json: true
    };

    promise(options)
        .then(function(json) {
            console.log(json);
            res.send(json);
        }).catch(function(err) {
            console.log(err);
            if(err.statusCode== 400) {
                // By default it sends way too much information to the ui.
                res.status(400).send({error:"Resource Not Found"})
            }
            res.send(err);
        });

});

/*
DELETE SCHEMA BY ID
*/
app.delete('/api/schema/:id', function(req, res) {

    var options = {
        method: 'DELETE',
        uri: metadata_registry_api + '/api/schema' + '/' + req.params.id,
        headers: {
            'User-Agent': 'Kubernetes-Microservice-FrontEnd',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        json: true
    };

    promise(options)
        .then(function(json) {
            console.log(json);
            res.send(json);
        }).catch(function(err) {
            console.log(err);
            res.send(err);
        });

});


app.get('/', function(req, res) {
    response.render('index.html')
});

app.post('/api/schema', function(req, res) {
    var options = {
        method: 'POST',
        uri: metadata_registry_api + '/api/schema',
        headers: {
            'User-Agent': 'Kubernetes-Microservice-FrontEnd',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: {


        }
    };

    promise(options)
        .then(function(json) {
            console.log(json);
            res.send(json);
        }).catch(function(err) {
            console.log(err);
            res.send(err);
        });


});

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
    console.log("App REST Server on " + app_rest_location + ":" + app_rest_port);
});
