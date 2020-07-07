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
export async function getPlayerNameIdPos () {
  try{
    let response = await fetch (`https://www.balldontlie.io/api/v1/players?per_page=100&page=0`);
    let playerData;
    let playerIdsAndNames =[];
    if (response.ok && response.status == 200){
      playerData = await response.json();
      //console.log(playerData);
      //console.log(playerData.data);
      playerIdsAndNames.push(playerData.data.map(player => {
        const newPlayer = {
          id: player.id, 
          first_name: player.first_name, 
          last_name: player.last_name,
          position: player.position,
          team_name: player.team.abbreviation,
          team_Id: player.team.id
        };
        return newPlayer;
      }));

      console.log(playerIdsAndNames);
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

console.log(getPlayerNameIdPos());

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

