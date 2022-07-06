import Character from './js/biz-func.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

let character = new Character;

$(document).ready(function() {
  $("#startButton").click(function(){
  $(".hallway").show();
  $(".story").hide();
  
  });
  $("#hallwayButton").click(function() {
    let hallwayAction = $("#hallway").val();
    if (hallwayAction.toLowerCase() === "move to attic") {
      $(".attic").show();
      $(".hallway").hide();
    } else if (hallwayAction.toLowerCase() === "move to cellar") {
      $(".cellar").show();
      $(".hallway").hide();
    } else if (hallwayAction.toLowerCase() === "move to study") {
      $(".study").show();
      $(".hallway").hide();
    } else if (hallwayAction.toLowerCase() === "move to parlor") {
      $(".parlorLocked").show();
      $(".hallway").hide();
    } else if (hallwayAction.toLowerCase() === "move to study") {
      $(".study").show();
      $(".hallway").hide();
    } else {
      $("#hallwayError").show();
    }
  });

  $("#studyButton").click(function(){
    let studyAction = $("#study").val();
    if (studyAction.toLowerCase() === "move to hallway"){
      $(".hallway").show();
      $(".study").hide();
    } else{
      $("#studyError").show();
    }
  });

  $("#cellarButton").click(function() {
    let cellarAction = $("#cellar").val();
    if (cellarAction.toLowerCase() === "move to hallway") {
      $(".hallway").show();
      $(".cellar").hide();
    } else if (cellarAction === "use laser gun" && character.laserPossession === true) {
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
    } else if (parlorAction.toLowerCase() === "use laser gun" && character.laserPossession === true ) {
      $(".parlorUnlocked").show();
      $(".parlorLocked").hide();
    } else if (parlorAction.toLowerCase() === "move to attic") {
      $(".attic").show();
      $(".parlorLocked").hide();
    } else if (parlorAction.toLowerCase() === "move to cellar") {
      $(".cellar").show();
      $(".parlorLocked").hide();
    } else if (parlorAction.toLowerCase() === "move to study") {
      $(".study").show();
      $(".parlorLocked").hide();
    } else {
      $("#parlorError").show();
    }
  });

  $("#parlorUnlockedButton").click(function() {
    let parlorUnlockedAction = $("#parlorUnlocked").val();
    if (parlorUnlockedAction.toLowerCase() === "move to hallway") {
      $(".hallway").show();
      $(".parlorUnlocked").hide();
    } else if (parlorUnlockedAction.toLowerCase() === "use laser gun") {
      $(".attack").show();
      $(".parlorUnlocked").hide();
    } else {
      $("#parlorUnlockedError").show();
    }
  });
});