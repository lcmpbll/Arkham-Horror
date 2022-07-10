export default class Character {
  constructor (damage) {
    this.damage = damage;
    this.health = 10;
    this.laserPosession = false;
    this.status = "alive";
    this.aim = 0;
    this.cellar = false;
  }
  pickUpLaser() {
    this.laserPosession = true;
  }
  
  increaseStats() {
    this.aim += 1;
    this.health += 1;
  }

  shootLaser() {
    if (this.aim === 0) {
      this.damage = Math.floor(Math.random()* (6 + 1));
    } else {
      this.damage = 3 + Math.floor(Math.random() *(6 - 3 + 1));
    } 
    return this.damage;
  }

  cellarExploration() {
    this.cellar = true;
  }


}
