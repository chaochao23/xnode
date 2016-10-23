var express = require('express');
var router = express.Router();
var sleep = require('system-sleep');
var fs = require('fs');

//original
/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
*/

module.exports = {
    index : function (req, res) {
        // TODO: findByAll 実装する
        // var users = {};
        //users = [{name:'Paul'},{name:'Sorimachi'}];
        var contents = fs.readFileSync("./users_list.txt", encoding='utf8');
        //console.log(contents);
        console.log("get contents from a local file");
        var results = contents.toString();
        //res.charset = 'utf-8';
        res.header("Content-Type", "application/json; charset=utf-8");
        res.send(results);
        //res.json(results);
    },
    show : function (req, res) {
        //var user = {};
        // TODO: findById 実装する
    	console.log(req.params);
    	console.log(req.query);
    	if(req.query.sleep){
        	var sleepTime = req.query.sleep;
            sleep(sleepTime);    		
    	}
        //user = {id:req.params.id, name:"Paul", description:"日本のJapan President"};
        var contents = fs.readFileSync("./users_"+req.params.id+".txt", encoding='utf8');
        //console.log(contents);
        console.log("get contents from a local file");
        var results = contents.toString();
        //res.charset = 'utf-8';
        res.header("Content-Type", "application/json; charset=utf-8");
        res.send(results);
    },
    create : function (req, res) {
        var user = {};
        // TODO: insert 実装する
        res.send(user);
    },
    update : function (req, res) {
        var user = {};
        // TODO: update 実装する
        res.send(user);
    },
    destroy : function (req, res) {
        var user = {};
        // TODO: delete 実装する
        res.send(user);
    },
};