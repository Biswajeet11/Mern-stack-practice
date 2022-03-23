/* usage of bind */

var pokemon = {
    firstName : 'Pika',
    lastName: 'Chu',
    getPokemonName : function(){
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName; 
    }
}

var pokemonName = function(){
    console.log(this); // this here refers global object 
    console.log(this.getPokemonName()+ 'I choose you!')  // error as this is pointed to global object not the pokemon object
}

// pokemonName();  // will give error on this 

var pokemonName2 = pokemonName.bind(pokemon);

console.log(pokemonName2())