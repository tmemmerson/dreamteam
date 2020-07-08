/*
export  async function getPlayerByName (playerName) {
  try{
    let response = await fetch (`https://www.balldontlie.io/api/v1/players/?search=${playerName}`);
    let playerData;
    let playerIds;
    if (response.ok && response.status == 200){
      playerData = await response.json();
      console.log(playerData);
      console.log(playerData.data);
      playerIds = playerData.data.map(player => {
        console.log(player.id);
        return player.id;
      });
      console.log(playerIds);
    }else {
      playerData = false;
      console.log(`response: ${response}`);
    }
    return playerData.data;
  }catch(error){
    console.log(`error: ${error}`);
    return false;
  }
}
*/
async function getPlayerNameIdPos () {
  try{
    let currentPage = 0;
    let playerData;
    let playerIdsAndNames =[];
    do {
      let response = await fetch (`https://www.balldontlie.io/api/v1/players?per_page=100&page=${currentPage}`);
      currentPage++;
      if (response.ok && response.status == 200){
        playerData = await response.json();
        //console.log(playerData);
        //console.log(playerData.data);
        playerIdsAndNames = playerData.data.map(player => {
          const newPlayer = {
            Id: player.id, 
            first_name: player.first_name, 
            last_name: player.last_name,
            position: player.position,
            team_name: player.team.abbreviation,
            team_Id: player.team.id
          };
          //console.log(playerIdsAndNames);
          return newPlayer;
        });

        console.log(playerIdsAndNames);
      } else {
        playerData = false;
        console.log(`response: ${response}`);
      }
      // return playerData.data;
    } while (playerData.meta.next_page);
  }catch(error){
    console.log(`error: ${error}`);
    return false;
  }
}

// export async function getPlayerStats (players) {
//   try {
//     let stats;
    
//     for (let i = 0; i < players.length; i++) {
//       // interval to delay api calls
//       let response = await fetch (`https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=${players[i].id}`);
//       if (response.ok && response.status == 200) {
//         stats = await response.json();
//         // do something with stats? idk im at a loss here
//       }
//     }
//   } catch(error) {
//     console.log(`Uh oh, something bad happened: ${error}`);
//     return false;
//   }
// }

export async function newWrapper (){
  let allPlayers = await getPlayerNameIdPos(); // an array of objects 
  console.log(allPlayers);
  //get players by position 
  let forwards = [];
  let guards = [];
  let centers=  [];
  allPlayers.forEach(function(player) {
    if (player.position === 'F' || player.position === 'F-C' || player.position === 'F-G' || player.position === 'G-F' || player.position === 'C-F') {
      forwards.push(player);
    }
    if (player.position === 'G' || player.position === 'G-C' || player.position === 'F-G' || player.position === 'G-F' || player.position === 'C-G') {
      guards.push(player);
    }
    if (player.position === 'C' || player.position === 'F-C' || player.position === 'C-G' || player.position === 'G-C' || player.position === 'C-F') {
      centers.push(player);
    }
  });
  return {
    forwards: forwards, 
    guards: guards, 
    centers: centers
  }
}

// console.log(getPlayerNameIdPos());

/*
export async function getStatsForPlayer(await getAllPlayers(playerName)){
  try{
  let statsResponse = await fetch (`https://www.balldontlie.io/api/v1/stats?player_ids[]=${playerIds}`);
  let playerStats;
  if(statsResponse.ok && statsResponse == 200) {
    playerStats = await statsResponse.json();
    console.log(playerStats)
    return playerStats;
  } else {
    playerStats = false; 
    console.log(statsResponse);
  }
  return playerStats;
  }catch(error){
  console.log(`error: ${error}`);
  return false;
  }
}

console.log(getStatsForPlayer(await getAllPlayers('Lebron')));
*/
//Now we have an array of players and we need to display the player name, id, and team to the webpage

