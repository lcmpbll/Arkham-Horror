import Character from './js/character.js';
import Monster from './js/monster.js';
import {battle} from './js/battle.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
let character = new Character;
let monster = new Monster;
$(document).ready(function() {

  $("#menuButton").click(function() {
    $(".story").show();
    $(".menu").hide();
  });

  $("#startButton").click(function(){
    $(".alley").show();
    $(".story").hide();
  });

  $("#alleyButton").click(function() {
    let alleyAction = $("#alley").val();
    if (alleyAction.toLowerCase() === "move to house") {
      $(".hallway").show();
      $(".alley").hide();
    } else if (alleyAction.toLowerCase() === "call the authorities"){
      $(".authorities").show();
      $(".alley").hide();
      $("#alleyError").hide();
    } else $("#alleyError").show();
  });

  $("#authoritiesButton").click(function() {
    $(".alley").show();
    $(".authorities").hide();
  });

  $("#hallwayButton").click(function() {
    let hallwayAction = $("#hallway").val();
    if (hallwayAction.toLowerCase() === "move to attic") {
      $(".attic").show();
      $(".hallway").hide();
      $("#hallwayError").hide();
    } else if (hallwayAction.toLowerCase() === "move to cellar") {
      $(".cellar").show();
      $(".hallway").hide();
      $("#hallwayError").hide();
      $("#killRats").hide();
    } else if (hallwayAction.toLowerCase() === "move to study") {
      $(".study").show();
      $(".hallway").hide();
      $("#hallwayError").hide();
    } else if (hallwayAction.toLowerCase() === "move to parlor") {
      $(".parlorLocked").show();
      $(".hallway").hide();
      $("#hallwayError").hide();
    } else if (hallwayAction.toLowerCase() === "move to study") {
      $(".study").show();
      $(".hallway").hide();
      $("#hallwayError").hide();
    } else {
      $("#hallwayError").show();
    }
  });

  $("#studyButton").click(function(){
    let studyAction = $("#study").val();
    if (studyAction.toLowerCase() === "move to hallway"){
      $(".hallway").show();
      $(".study").hide();
      $("#studyError").hide();
    } else{
      $("#studyError").show();
    }
  });

  $("#cellarButton").click(function() {
    let cellarAction = $("#cellar").val();
    if (cellarAction.toLowerCase() === "move to hallway") {
      $(".hallway").show();
      $(".cellar").hide();
    } else if (cellarAction === "use laser gun" && character.laserPosession === true) {
      $("#killRats").show();
      character.increaseStats();
    } else {
      $("#cellarError").show();
    }
  });

  $("#atticButton").click(function() {
    let atticAction = $("#attic").val();
    if (atticAction.toLowerCase() === "move to hallway") {
      $(".hallway").show();
      $(".attic").hide();
      $("#atticError").hide();
      $("#pickUpLaser").hide();
    } else if (atticAction.toLowerCase() === "pick up laser gun") {
      $("#pickUpLaser").show();
      character.pickUpLaser();
    } else {
      $("#atticError").show();
    }
  });

  $("#parlorLockedButton").click(function() {
    let parlorAction = $("#parlor").val();
    if (parlorAction.toLowerCase() === "move to hallway") {
      $(".hallway").show();
      $(".parlorLocked").hide();
      $("#parlorError").hide();
    } else if (parlorAction.toLowerCase() === "use laser gun" && character.laserPosession === true ) {
      console.log(character.laserPosession);
      $(".parlorUnlocked").show();
      $(".parlorLocked").hide();
      $("#parlorError").hide();
    } else if (parlorAction.toLowerCase() === "use laser gun" && character.laserPosession === false ) {
      $("#parlorLockedError").show();

    } else if (parlorAction.toLowerCase() === "move to attic") {
      $(".attic").show();
      $(".parlorLocked").hide();
      $("#parlorError").hide();
    } else if (parlorAction.toLowerCase() === "move to cellar") {
      $(".cellar").show();
      $(".parlorLocked").hide();
      $("#parlorError").hide();
    } else if (parlorAction.toLowerCase() === "move to study") {
      $(".study").show();
      $(".parlorLocked").hide();
      $("#parlorError").hide();
    } else {
      $("#parlorLockedError").show();
    }
  });

  $("#parlorUnlockedButton").click(function() {
    let parlorUnlockedAction = $("#parlorUnlocked").val();
    if (parlorUnlockedAction.toLowerCase() === "move to hallway") {
      $(".hallway").show();
      $(".parlorUnlocked").hide();
      $("#parlorUnlockedError").hide();
    } else if (parlorUnlockedAction.toLowerCase() === "use laser gun") {
      battle(character, monster);
      $(".attack").show();
      $(".parlorUnlocked").hide();
      $("#parlorUnlockedError").hide();
    }
    else if (parlorUnlockedAction.toLowerCase() === "move to parlor") {
      $(".attack").hide();
      $(".parlorInterior").show();
      $(".parlorUnlocked").hide();
      $("#parlorUnlockedError").hide();
    }
    else {
      $("#parlorUnlockedError").show();
    }
  });

  $("#parlorButton").click(function() {
    let parlorUnlockedAction = $("#parlorUnlocked").val();
    if (parlorUnlockedAction.toLowerCase() === "move to hallway") {
      $(".hallway").show();
      $(".parlorUnlocked").hide();
      $("#parlorUnlockedError").hide();
    } else if (parlorUnlockedAction.toLowerCase() === "use laser gun") {
      if (monster.health === 0) {
        $(".cyborgDies").show();
        $(".parlorUnlocked").hide();
        $("#parlorUnlockedError").hide();
      } else if (character.health === 0) {
        $(".characterDies").show();
        $(".parlorUnlocked").hide();
        $("#parlorUnlockedError").hide();
      }

    }
    else {
      $("#parlorUnlockedError").show();
    }
  });

 
});