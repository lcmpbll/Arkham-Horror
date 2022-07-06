// import Character from '../js/character.js';
// import Monster from '../js/monster.js';

export const battle = (character, monster) => {
 
  character.shootLaser();
  monster.health -= character.damage;
  return "Battle is happening";
}