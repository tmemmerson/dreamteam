import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getCurrentPlayers } from './call.js';
import { getPlayerStats } from './call.js';

$(document).ready(function(){
  $("#formSearchPlayerName").submit(function(event) {
    event.preventDefault();
    const name = $("input#playerNameSearch").val();
    
    async function apiCall() {
      
      const currentPlayers = await getCurrentPlayers(name);
          for (let i = 0; i < currentPlayers.length; i++) {
        $("#showPlayers").append('<li>' + currentPlayers[i].first_name + " " + currentPlayers[i].last_name + " - Id Number " + currentPlayers[i].Id + '</li>');
      console.log(currentPlayers);
      }
      
      return false;
    }
    apiCall();

    $("#showStatsByPlayerId").submit(function(event) {
      event.preventDefault();
      const ID = $("input#IdNumber").val();
      async function apiCallStats() {
        // retrieves stats based on ID entered
        const playerStats = await getPlayerStats(ID);
        $('#printStat').text("Points: " + playerStats.points + " Assist: " + playerStats.assists + " Rebounds" + playerStats.rebounds);
      }
      apiCallStats();
    });
    
  });
});

async function doThing (){
console.log(await getPlayerStats(237));
}

doThing(); 