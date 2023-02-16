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
		userLib.creatUser({
			userName : "Jashwanth",
			yearOfGraduation : 2030
		},function(err,result){
			if(err) console.error(err);
			else console.log(result);
		});
		
		userLib.creatUser({userName : "shakthimaan",yearOfGraduation},function(err,result){
			if(err) {
				console.error(err);
			}
			else {
				console.log(result);
			}
		});

		userLib.updateUser(function(err,result){
			if(err) {
				console.error(err);
			}
			else {
				console.log(result);
			}
		});
			userLib.deleteUser("Jashwanth",function(err,result) {
				if(err) console.error(err);
				else console.log(result);
			});
		userLib.getUserByFilter({userName:"Jashwanth"},function(err,result){
			if(err) console.error(err);
			else console.log(result);
		});
		userLib.getAllUsers(function(err,result){
			if(err) console.error(err);
			else console.log(result);
		});
		app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
	}
});

