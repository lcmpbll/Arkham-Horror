export default class Monster {
  constructor(damage) {
    this.damage = damage;
    this.health = 10;
    this.status = "alive";
    
  }

  monsterDamage() {
    this.damage = Math.floor(Math.random() * (6 + 1));
    return this.damage;
  }
}