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
    
    function showDetails(pokemon){
        console.log(pokemon);
    }
    
    function addListener(button,pokemon){
        button.addEventListener('click',function(event){
            showDetails(pokemon);
        });
    }

    function addListItem(pokemon){
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      addListener(button,pokemon);
    }
    return {                                           // Returns the value pushed by the add() function
      add : add,
      getAll : getAll,
      addListItem : addListItem
      
    };
    
  })();

  pokemonRepository.add({name:"pikachu",height:6,type:"electric"});
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
  
   
//    pokemonRepository.getAll().forEach(function(pokemon){

//    let ulelement = document.querySelector('pokemon-list');
//    let listitem = document.createElement('li');
//    let button = document.createElement('button');
//    button.innerText = "placeholder";
//    button.classList.add("button1");
//    listitem.appendChild(button);
//    ulelement.appendChild(listitem);

//    });    
//    let text = " <span class='text'>- Wow that's big <br> </span>";    // Store the display text in a variable
   
//    function myFavPokemons(pokemon){                                  //Function to execute the data inside the PokemonList
//      if(pokemon.height > 3){
  
//         //Check and write if the height is greater than 3
//        document.write("<p class='pokemon_list_item'>" + pokemon.name + " (Height" + pokemon.height + ")" + text + "</p>");  
//      }
       
//      else{
  
//       //Else write the pokemon name and height
//        document.write("<p class='pokemon_list_item'>" + pokemon.name + " (Height" + pokemon.height + ") </p>"); 
//      }
//    }
  
//    // Pushes a new onject to the PokemonList
//    pokemonRepository.add({name:"pikachu",height:6,type:"electric"});
     
//    // Fetches values from PokemonList by accessing the IIFE with the help of getAll()
                
   