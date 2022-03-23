/* In call the parameters are passed as a comma separated values */

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



pokemonName.call(pokemon, "carrot", "jumping");

