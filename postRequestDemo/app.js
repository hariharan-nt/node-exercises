var express = require("express");
var app=express();
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));


// Write a post route and test with postman
//use a form to send post request
// use body parser to get form data

app.set("view engine","ejs");


app.get("/", function(req,resp){
    resp.render("home");
});

var friends = ["Nila","Danny","kulla"];

app.get("/friends",function(req,resp){
    
    resp.render("friends",{friends:friends});
})

app.post("/addfriend",function(req,resp){
    var newFriend=req.body.newfriend;
    friends.push(newFriend);
    resp.redirect("/friends");
    
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});