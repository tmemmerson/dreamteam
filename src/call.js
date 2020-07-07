
export async function getPlayerNameIdPos () {  //this function access the players api and returns a new array with the ids of each player
  try{
    let currentPage = 28;  //the api has 33 pages
    let playerData;
    let playerIdsAndNames = [];  // this array will hold the ids, names, and teams of each player
    do { // we are using a do while loop here to cycle through each page of the api call
      let response = await fetch (`https://www.balldontlie.io/api/v1/players?per_page=100&page=${currentPage}`);
      currentPage++;  // after each page gets called, we add 1 to current page
      if (response.ok && response.status == 200){ //checks to see if the api call works
        playerData = await response.json(); // if the api call works, we set the data to 'playerData'
        playerIdsAndNames = playerData.data.map(player => { //Here, we are going to fill the playerIdsAndNames array that is on line 6. playerdata returns a A LOT of information. We only want 6 pieces of information from the data. 
          const newPlayer = { //the playerData.data.map goes throuh each player object in our array and creates a new array that only contains the next 6 lines of information
            Id: player.id, 
            first_name: player.first_name, 
            last_name: player.last_name,
            position: player.position,
            team_name: player.team.abbreviation,
            team_Id: player.team.id
          };
          return newPlayer;
        });
      } else { // this is what will happen if the api call fails
        playerData = false;
        console.log(`response: ${response}`);
      }
    } while (playerData.meta.next_page); // here we want the api to be called as long as there is another page of information. This statement is a short way of saying that while(there is one more page of data = true) - keep calling the api
    return playerIdsAndNames; //we are telling the code to give us a new array filled with objects. Each object is 1 player. 
    
    // Example of how this array will look:
    // playerIdsAndNames = [{
    // Id: 1, 
    // first_name: Lebron, 
    // last_name: James,
    // position: Forward,
    // team_name: Bulls,
    // team_Id: 55}]
    

  }catch(error){
    console.log(`error: ${error}`);  //If there is an error, this will show it
    return false;
  }
}


export async function newWrapper (){ // now we need a function to give us the stats for each player. We can only access the stats with the Player ID - this is important. This is why we need the first function. 
  let allPlayers = await getPlayerNameIdPos(); // we are setting the array of players we created in the first function to 'allPlayers'
  console.log(allPlayers); 
  //Here we are creating open arrays for each position. In our website we will allow users to search for players by position
  let forwards = [];
  let guards = [];
  let centers =  [];
  let GC =  []; // These 4 are weird combination positions
  let GF =  [];
  let FC =  [];
  let FG =  [];
  allPlayers.forEach(function(player) { // here we are using a forEach loop to go through our array of players and sort them into each array.
    if (player.position === 'F') { // If a players position matches 'F' they are put into the forward array
      forwards.push(player);
    }
    if (player.position === 'GF') {
      guards.push(player);
    }
    if (player.position === 'C') {
      centers.push(player);
    }
    if (player.position === 'G-C' || player.position === 'C-G') {
      GC.push(player);
    }
    if (player.position === 'G-F' || player.position === 'F-G') {
      GF.push(player);
    }
    if (player.position === 'F-C' || player.position === 'C-F') {
      FC.push(player);
    }
    if (player.position === 'F-G' || player.position === 'G-F') {
      FG.push(player);
    }

  });
  return { // We need to return the positions of the array. We are returning them in this object. 
    forwards: forwards, 
    guards: guards, 
    centers: centers
  }
}

