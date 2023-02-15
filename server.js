require("dotenv").config();
const userLib = require("./backend/lib/userLib");
const mongoose = require("mongoose");

const express = require('express');
const app = express();
const port = process.env.PORT || 5010;


app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html")
});

app.get("/resume", function(req, res){
	res.sendFile(__dirname+"/resume.html")
});
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function(err){
	if(err) {
		console.error(err);
	}
	else {
		console.log("DB connected");
        // TODO : Do not create user if atleast 1 user exist in the table then dont create
		userLib.creatFirstUser(function(err,res){
			if(err) {
				//console.error(err);
			}
			else{
				console.log(res);
			}
		});
		app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
	}
});

