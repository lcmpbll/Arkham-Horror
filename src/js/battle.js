// import Character from '../js/character.js';
// import Monster from '../js/monster.js';

export const battle = (character, monster) => {
 
  character.shootLaser();
  monster.health -= character.damage;
  monster.monsterDamage();
  character.health -= monster.damage;

  if(character.health <= 0) {
    character.status = "dead";
  } else {
    character.status = "alive"
  }
  return "Battle is happening";
}