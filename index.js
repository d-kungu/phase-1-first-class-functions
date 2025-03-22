function receivesAFunction(spy){
    console.log(spy())
};

receivesAFunction(function(){return "I'm a great spy!"});

function returnsANamedFunction() {
    return function namedFunction(){
        Named
    };
    };
  
    function  returnsAnAnonymousFunction(){
        return function(){
            Anonymous
        }
    }

  