
export async function getPlayerNameIdPos () {
  try{
    let currentPage = 15;
    let playerData;
    let playerIdsAndNames = [];
    do {
      let response = await fetch (`https://www.balldontlie.io/api/v1/players?per_page=100&page=${currentPage}`);
      currentPage++;
      if (response.ok && response.status == 200){
        playerData = await response.json();
        playerData.data.forEach(player => {
          const newPlayer = {
            Id: player.id, 
            first_name: player.first_name, 
            last_name: player.last_name,
            position: player.position,
            team_name: player.team.abbreviation,
            team_Id: player.team.id
          };
          playerIdsAndNames.push(newPlayer);
        });
      } else {
        playerData = false;
        console.log(`response: ${response}`);
      }

    } while (playerData.meta.next_page);
    return playerIdsAndNames;
  }catch(error){
    console.log(`error: ${error}`);
    return false;
  }
}

export async function getPlayerStats (players) {
  try {
    let stats;
    for (let i = 0; i < players.length; i++) {
      // interval to delay api calls
      let response = await fetch (`https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=${players[i].id}`);
      if (response.ok && response.status == 200) {
        stats = await response.json();
        
      }
    }
    return stats;
  } catch(error) {
    console.log(`Uh oh, something bad happened: ${error}`);
    return false;
  }
}

export async function getCurrentPlayers (){
  let allPlayers = await getPlayerNameIdPos(); // an array of objects 
  console.log(allPlayers);
  //get players by position 
  let currentPlayers = [];
  // let forwards = [];
  // let guards = [];
  // let centers=  [];
  allPlayers.forEach(function(player) {
    if (player.position !== "") {
      currentPlayers.push(player);
    }
    // if (player.position === 'F' || player.position === 'F-C' || player.position === 'F-G' || player.position === 'G-F' || player.position === 'C-F') {
    //   forwards.push(player);
    // }
    // if (player.position === 'G' || player.position === 'G-C' || player.position === 'F-G' || player.position === 'G-F' || player.position === 'C-G') {
    //   guards.push(player);
    // }
    // if (player.position === 'C' || player.position === 'F-C' || player.position === 'C-G' || player.position === 'G-C' || player.position === 'C-F') {
    //   centers.push(player);
    // }
  });
  console.log(currentPlayers);
  return currentPlayers;
  // return {
  //   forwards: forwards, 
  //   guards: guards, 
  //   centers: centers
  // }
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
*/
