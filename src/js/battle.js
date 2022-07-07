export const battle = (character, monster) => {
  character.shootLaser();
  monster.health -= character.damage;
  monster.monsterDamage();
  character.health -= monster.damage;

  if(character.health <= 0) {
    character.status = "dead";
    character.health = 0;
  } else {
    character.status = "alive";
  }

  if(monster.health <= 0) {
    monster.status = "dead";
    monster.health = 0;
    character.health = 1;
  } else {
    monster.status = "alive";
  }
  return "Battle is happening";
};