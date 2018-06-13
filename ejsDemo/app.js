var express = require("express");
var app= express();



// Partials folder contains the header and footer and other common
// html elements



//enables express to look for other files in this folder public
app.use(express.static("public"));

//enables us to not include .ejs in every template name 
app.set("view engine","ejs");

//Route 

app.get("/",function(req,resp){
    //render method is used in reponse to use ejs(embedded java script file
    resp.render("home");
    
});


app.get("/view/:name",function(req,resp){
    var user=req.params.name;
    
    //render method is used in reponse to use ejs(embedded java script file
    resp.render("dog",{user:user});
    
});


app.get("/posts", function (req,resp){
   var posts= [
       {title: "post1", author:"author1"},
       {title: "post2", author:"author2"},
       {title: "post3", author:"author3"},
       {title: "post4", author:"author4"}
     ];
     
     
     
     resp.render("posts",{ posts:posts} );
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!!!");
});