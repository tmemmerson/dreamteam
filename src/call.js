export  async function getAllPlayers () {
  try{
    let response = await fetch (`https://www.balldontlie.io/api/v1/players/`)
    let playerData;
    if (response.ok && response.status == 200){
      playerData = await response.json();
    }else {
      playerData = false;
      console.log(`response: ${response}`);
    }
    return playerData;
  }catch(error){
    console.log(`error: ${error}`);
    return false;
  }
}