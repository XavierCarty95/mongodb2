const mocha = require('mocha');
const assert = require("assert");
const MarioChar = require("mariochar")

//Describe test

describe('Saving records', function(){
    
    it('Saves a record to the database', function(done){ 
        
        var char = new MarioChar({
            name: 'Mario'
        
            
        });
        
        char.sav().then(function(){
            assert(char.isNew === false)
            done();
        });
        
        
        
    
    });

    
  });