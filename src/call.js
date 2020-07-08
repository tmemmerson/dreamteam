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
    let statsArray = [];
    let stats;
    for (let i = 0; i < players.length; i++) {
      // timeout to delay api calls
      setTimeout(async () => {
        let response = await fetch (`https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=${players[i].Id}`);
        if (response.ok && response.status == 200) {
          stats = await response.json();
          const playerStats = {
            points: stats.data.pts,
            assists: stats.data.ast,
            rebounds: stats.data.reb
          }
          statsArray.push(playerStats);
          console.log(statsArray);
        } else {
          stats = false;
          console.log(`response: ${response}`);
        }
      }, 2000);
    }
    return statsArray;
  } catch(error) {
    console.log(`Uh oh, something bad happened: ${error}`);
    return false;
  }
}

export async function getCurrentPlayers (){
  let allPlayers = await getPlayerNameIdPos(); // an array of objects 
  console.log(allPlayers);
  let currentPlayers = [];
  allPlayers.forEach(function(player) {
    if (player.position !== "") {
      currentPlayers.push(player);
    }
  });
  console.log(currentPlayers);
  return currentPlayers;
}

// export function sortPosition() {
  // let forwards = [];
  // let guards = [];
  // let centers=  [];
  // allPlayers.forEach(function(player) {
    // if (player.position === 'F' || player.position === 'F-C' || player.position === 'F-G' || player.position === 'G-F' || player.position === 'C-F') {
    //   forwards.push(player);
    // }
    // if (player.position === 'G' || player.position === 'G-C' || player.position === 'F-G' || player.position === 'G-F' || player.position === 'C-G') {
    //   guards.push(player);
    // }
    // if (player.position === 'C' || player.position === 'F-C' || player.position === 'C-G' || player.position === 'G-C' || player.position === 'C-F') {
    //   centers.push(player);
  // }
  // }
  // return {
  //   forwards: forwards, 
  //   guards: guards, 
  //   centers: centers
  // }
// }
