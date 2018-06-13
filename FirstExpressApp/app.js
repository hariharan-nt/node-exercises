var express= require("express");

var app= express();

/*
/ -> hi there
*/

app.get("/", function(req,resp){
   resp.send("Hi There!") ;
});

app.get("/bye", function(req,resp){
   resp.send("Goodbye!") ;
});

app.get("/dog", function(req,resp){
   resp.send("Bow.. Bow!") ;
});

app.get("/r/:subredditName", function(req,resp){
   var subreddit = req.params.subredditName;
    resp.send("Welcome to the "+ subreddit.toUpperCase() +" comment section");
});


app.get("/r/:subredditName/comments/:id/:title", function(req,resp){
  // var subreddit = req.params.subredditName;
  var title = req.params.title;
   resp.send("Welcome to the "+ title.toUpperCase() +"comment section");
});

app.get("*", function(req,resp){
   resp.send("you are a star!!!!");
});

//process.env is used because of cloud9 usage

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Server has started !!");
});