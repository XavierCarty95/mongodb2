const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/testaroo" , { useNewUrlParser: true } );

mongoose.connection.once('open', function(){
    console.log('Connection has been made now make fireworks'); 
    
}).on("error", function(error){
    console.log("error has been made" , error)
});