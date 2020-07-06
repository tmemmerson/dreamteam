export  async function getAllPlayers (playerName) {
  try{
    let response = await fetch (`https://www.balldontlie.io/api/v1/players/?search=${playerName}`);
    let playerData;
    if (response.ok && response.status == 200){
      playerData = await response.json();
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

//Now we have an array of players and we need to display the player name, id, and team to the webpage