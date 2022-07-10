import Character from './js/character.js';
import Monster from './js/monster.js';
import {battle} from './js/battle.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function clearFields() {
  $("#alley").val("");
  $("#alley2").val("");
  $("#hallway").val("");
  $("#study").val("");
  $("#cellar").val("");
  $("#attic").val("");
  $("#parlor").val("");
  $("#parlorUnlocked").val("");
}

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
    if ((alleyAction.toLowerCase().includes("house"))) {
      $(".hallway").show();
      $(".alley").hide();
    } else if (alleyAction.toLowerCase() === "call the authorities"){
      $(".authorities").show();
      $(".alley").hide();
      $("#alleyError").hide();
    } else $("#alleyError").show();
    clearFields();
  });

  $("#authoritiesButton").click(function() {
    $(".alley2").show();
    $(".authorities").hide();
    $('#alley2Error').hide();
  });

  $("#alley2Button").click(function() {
    let alley2Action = $("#alley2").val();
    if ((alley2Action.toLowerCase().includes("house"))) {
      $(".hallway").show();
      $(".alley2").hide();
      $('#alley2Error').hide();
    } else $('#alley2Error').show();
    clearFields();
  });
  
  $("#hallwayButton").click(function() {
    let hallwayAction = $("#hallway").val();
    if (hallwayAction.toLowerCase().includes("attic") && character.laserPosession === true) {
      $(".atticReturn").show();
      $(".hallway").hide();
      $("#hallwayError").hide();
    
    } else if (hallwayAction.toLowerCase().includes("attic")) {
      $(".attic").show();
      $(".hallway").hide();
      $("#hallwayError").hide();

    } else if (hallwayAction.toLowerCase().includes("cellar") && character.cellar === true) {
      $(".cellarReturn").show();
      $(".hallway").hide();
      $("#hallwayError").hide();
      $(".cellar").hide();
    } else if (hallwayAction.toLowerCase().includes("cellar")) {
      $(".cellar").show();
      $(".hallway").hide();
      $("#hallwayError").hide();
      character.cellarExploration();
    } else if (hallwayAction.toLowerCase().includes("study")) {
      $(".study").show();
      $(".hallway").hide();
      $("#hallwayError").hide();
    } else if (hallwayAction.toLowerCase().includes("parlor")) {
      $(".parlorLocked").show();
      $(".hallway").hide();
      $("#hallwayError").hide();
    } else if (hallwayAction.toLowerCase().includes("study")) {
      $(".study").show();
      $(".hallway").hide();
      $("#hallwayError").hide();
    } else {
      $("#hallwayError").show();
    }
    clearFields();
  });

  $("#studyButton").click(function(){
    let studyAction = $("#study").val();
    if (studyAction.toLowerCase().includes("hallway")) {
      $(".hallway").show();
      $(".study").hide();
      $("#studyError").hide();
    } else {$("#studyError").show();
    } clearFields();
  });

  $("#cellarButton").click(function() {
    let cellarAction = $("#cellar").val();
    if (cellarAction.toLowerCase().includes("hallway")) {
      $(".hallway").show();
      $(".cellar").hide();
      character.cellarExploration();
    } else if (cellarAction.toLowerCase().includes("laser") && character.laserPosession === true) {
      $("#killRats").show();
      character.increaseStats();
    } else {$("#cellarError").show();
    } clearFields();
  });

  $("#cellarReturnButton").click(function() {
    let cellarReturnAction = $("#cellarReturn").val();
    if (cellarReturnAction.toLowerCase().includes("hallway")) {
      $(".hallway").show();
      $(".cellarReturn").hide();
    } else if (cellarReturnAction.toLowerCase().includes("laser") && character.laserPosession === true) {
      $("#killRatReturn").show();
      character.increaseStats();
    } else {$("#cellarReturnError").show();
    } clearFields();
  });

  $("#atticReturnButton").click(function() {
    let atticReturnAction = $("#atticReturn").val();
    if (atticReturnAction.toLowerCase().includes("hallway")) {
      $(".hallway").show();
      $(".atticReturn").hide();
      $("#atticReturnError").hide();
    } else {
      $("#atticReturnError").show();
    } clearFields();
  });

  $("#atticButton").click(function() {
    let atticAction = $("#attic").val();
    if (atticAction.toLowerCase().includes("hallway")) {
      $(".hallway").show();
      $(".attic").hide();
      $("#atticError").hide();
      $("#pickUpLaser").hide();
    } else if (atticAction.toLowerCase().includes("laser")) {
      $("#pickUpLaser").show();
      $('.inventory').show();
      character.pickUpLaser();
    } else {
      $("#atticError").show();
    } clearFields();
  });

  $("#parlorLockedButton").click(function() {
    let parlorAction = $("#parlor").val();
    if (parlorAction.toLowerCase().includes("hallway")) {
      $(".hallway").show();
      $(".parlorLocked").hide();
      $("#parlorError").hide();
    } else if (parlorAction.toLowerCase().includes("laser") && character.laserPosession === true ) {
      $(".parlorUnlocked").show();
      $(".parlorLocked").hide();
      $("#parlorError").hide();
    } else if (parlorAction.toLowerCase().includes("laser") && character.laserPosession === false ) {
      $("#parlorLockedError").show();
    } else { 
      $('#parlorLockedError')}
    
    clearFields();
  });

  $("#parlorUnlockedButton").click(function() {
    let parlorUnlockedAction = $("#parlorUnlocked").val();
    if (parlorUnlockedAction.toLowerCase().includes("hallway")) {
      $(".hallway").show();
      $(".parlorUnlocked").hide();
      $("#parlorUnlockedError").hide();
    } else if (parlorUnlockedAction.toLowerCase.includes("laser")) {
      $(".roboBattle").show();
      $("#monsterHealth").text(monster.health);
      $("#characterHealth").text(character.health);
      $(".parlorUnlocked").hide();
      $("#parlorUnlockedError").hide();
    }
    else if (parlorUnlockedAction.toLowerCase().includes("parlor")) {
      $(".roboBattle").hide();
      $(".parlorInterior").show();
      $(".parlorUnlocked").hide();
      $("#parlorUnlockedError").hide();
    }
    else {
      $("#parlorUnlockedError").show();
    }
    clearFields();
  });

  $("#parlorButton").click(function() {
    let parlorUnlockedAction = $("#parlorInterior").val();
    if (parlorUnlockedAction.toLowerCase().includes("hallway")) {
      $(".hallway").show();
      $(".parlorInterior").hide();
      $("#parlorError").hide();
    } else if (parlorUnlockedAction.toLowerCase().includes("laser")) {
      $(".roboBattle").show();
      $("#monsterHealth").text(monster.health);
      $("#characterHealth").text(character.health);
      $("#parlorError").hide();
      $(".parlorInterior").hide();
    } else {
      $("#parlorError").show();
    }
  });
    
  $("#roboBattleButton").click(function() {
    battle(character, monster);
    $(".monsterMisses").hide();
    $(".characterMisses").hide();
    $("#monsterHealth").text(monster.health);
    $("#characterHealth").text(character.health);
    if (monster.health <= 0) {
      $(".cyborgDies").show();
      $(".monsterMisses").hide();
      $(".characterMisses").hide();
      $(".healthDisplay").hide();
    } else if (character.health <= 0) {
      $(".characterDies").show();
      $(".monsterMisses").hide();
      $(".characterMisses").hide();
      $(".healthDisplay").hide();
    } else if (monster.damage === 0) {
      $(".monsterMisses").show();
    } else if (character.damage === 0) {
      $(".characterMisses").show();
    } else {
      $(".exchangeFire").show();
    }
    clearFields();
  });
});