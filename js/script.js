let pokemonRepository = (function(){                  // IIFE Function which restricts the scope of pokemon list variable. 
    let pokemonList = [
       { name: "Balbasure", height: 7, type: ["grass", "water"] },
       { name: "Squirtle", height: 0.5, type: "water" }, 
       { name: "Eve", height: 2, type: "water" },
     ];
   
    function getAll(){                                 // To fecth the values inside PokemonList
                                                        
      return pokemonList;
    }
    function add(pokemon){                            // To push a new object to the PokemonList Array
      pokemonList.push(pokemon);
    }
    return {                                           // Returns the value pushed by the add() function
      add : add,
      getAll : getAll                                 // Fetches the values inside the variable pokemonList from the getAll()
    };
   })();
   
   let text = " <span class='text'>- Wow that's big <br> </span>";    // Store the display text in a variable
   
   function myFavPokemons(pokemon){                                  //Function to execute the data inside the PokemonList
     if(pokemon.height > 3){
  
        //Check and write if the height is greater than 3
       document.write("<p class='pokemon_list_item'>" + pokemon.name + " (Height" + pokemon.height + ")" + text + "</p>");  
     }
       
     else{
  
      //Else write the pokemon name and height
       document.write("<p class='pokemon_list_item'>" + pokemon.name + " (Height" + pokemon.height + ") </p>"); 
     }
   }
  
   // Pushes a new onject to the PokemonList
   pokemonRepository.add({name:"pikachu",height:6,type:"electric"});
     
   // Fetches values from PokemonList by accessing the IIFE with the help of getAll()
   pokemonRepository.getAll().forEach(myFavPokemons);                 
   