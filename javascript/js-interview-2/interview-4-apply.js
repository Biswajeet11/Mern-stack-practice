
/*  In apply the parameters are passed as an array */

var pokemon = {
    firstName : 'Pika',
    lastName: 'Chu',
    getPokemonName : function(){
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName; 
    }
}

var pokemonName = function(snack,hobby){
    console.log(this); // this here refers global object 
    console.log(this.getPokemonName()+ ' loves '+ snack + ' and ' + hobby)  
}



pokemonName.apply(pokemon, ["carrot", "jumping"]);


var a = [1,2,3,4,5];

console.log(Math.max.apply(this,a))  // 6