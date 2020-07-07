
export async function getPlayerNameIdPos () {
  console.log("lol");
  try{
    let currentPage = 28;
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

          return newPlayer;
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


export async function newWrapper (){
  let allPlayers = await getPlayerNameIdPos(); // an array of objects 
  console.log(allPlayers);
  //get players by position 
  let forwards = [];
  let guards = [];
  let centers=  [];
  let guardCenters=  [];
  let guardForwards=  [];
  let forwardCenters=  [];
  let forwardCen=  [];
  allPlayers.forEach(function(player) {
    if (player.position === 'F') {
      forwards.push(player);
    }
    if (player.position === 'GF') {
      guards.push(player);
    }
    if (player.position === 'C') {
      centers.push(player);
    }
    if (player.position === 'F-C' || player.position === 'C-F') {
      centers.push(player);
    }
    if (player.position === 'C' || player.position === 'F-C' || player.position === 'C-G' || player.position === 'G-C' || player.position === 'C-F') {
      centers.push(player);
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

