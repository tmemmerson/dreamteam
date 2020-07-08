
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
        playerIdsAndNames = playerData.data.map(player => {
          const newPlayer = {
            Id: player.id, 
            first_name: player.first_name, 
            last_name: player.last_name,
            position: player.position,
            team_name: player.team.abbreviation,
            team_Id: player.team.id
          };
          //console.log(playerIdsAndNames);being called successfully //returns thousands
          //console.log(newPlayer); New players being created successfully
          return newPlayer;
        });        
      } else {
        playerData = false;
        console.log(`response: ${response}`);
      }

    } while (playerData.meta.next_page);
    console.log(playerIdsAndNames); //returns 68 players in our array
    return playerIdsAndNames;
  }catch(error){
    console.log(`error: ${error}`);
    return false;
  }
}

export async function sortPlayersByPosition (){
  let allPlayers = await getPlayerNameIdPos(); // an array of player objects 
  console.log(await allPlayers);
  //get players by position 
  let forwards = []; //F
  let guards = [];//G
  let centers=  [];//C
  let guardCenters=  []; //G-C C-G
  let guardForwards=  [];//F-G G-F
  let forwardCenters=  [];//F-C C-F
  allPlayers.forEach(function(player) {
    if (player.position === 'F') {
      forwards.push(player);
    }
    if (player.position === 'G') {
      guards.push(player);
    }
    if (player.position === 'C') {
      centers.push(player);
    }
    if (player.position === 'F-C' || player.position === 'C-F') {
      forwardCenters.push(player);
    }
    if (player.position === 'G-C' || player.position === 'C-G' ) {
      guardCenters.push(player);
    }
    if (player.position === 'F-G' || player.position === 'G-F') {
      guardForwards.push(player);
    }
  });
  console.log(forwards, guards, centers, forwardCenters, guardCenters, guardForwards );
  return {
    forwards: forwards, 
    guards: guards, 
    centers: centers,
    guardForwards: guardForwards,
    forwardCenters: forwardCenters,
    guardCenters: guardCenters,
  }
}

