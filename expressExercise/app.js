var express= require("express");
var app= express();

app.get("/", function(req,resp){
    resp.send("Hi there!!!! ");
});

app.get("/speak/:animal", function(req,resp){
    var animal= req.params.animal;
    
    var sounds={
        pig: "oink",
        cow :"moo",
        dog: "nila danny kulla"
    }
    
    var sound= sounds[animal.toLowerCase()];
    resp.send(sound);
    // if(animal==="pig"){
    //   resp.send("OINK!!!");
    // } else if(animal==="cow"){
    //     resp.send("MOOOOOOOOOOO!!!");
    // } else if(animal==="dog"){
    //     resp.send("Danny,NILA,KULLA");
    // }
    
});

app.get("/repeat/:word/:num", function(req,resp){
    var num = Number(req.params.num);
    var word= req.params.word;
    var response=[];
    
    for(var i=0; i<num;i++){
      response+=" "+word;
      
    }
    resp.send(response);
    
});



app.get("*", function(req,resp){
    resp.send("Sorry, page not found...");
})

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Server Started!!!");
});