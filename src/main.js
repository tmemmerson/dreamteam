import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getCurrentPlayers } from './call.js';
import { getPlayerStats } from './call.js';

// const players = getPlayers();

// players.data = [
//   {
//     id: 14,
//   },
//   {
//     id: 15
//   }
// ]

// const searchedPlayer = players.data.find(player => {
//   player.id === 14
// })



/*
async function parseData() {
  const playerData = await getAllPlayers(); // calls all the player data
  if(playerData === false) {
    $("#printStat").Text("I'm sorry there was an error with your request.");
  } else {
    $("#printStat").text(`here is your stat ${playerData.data[0].id}`);
  }
}
*/
//console.log(await getPlayerNameIdPos());

async function test() {
  const currentPlayers = await getCurrentPlayers();
  await getPlayerStats(currentPlayers);
}

test();



$(document).ready(function(){
  
});