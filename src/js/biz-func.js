//let character = new Character();
export default class Character {

  constructor (damage) {
  this.damage = damage;
  this.inventory = [];
  this.health = 10;
  this.aim = 0;
 }
  pickUpLaser() {
  let laserGun = {"name" : "laser gun"};
  this.inventory.push(laserGun)
 }
  hasLaser() {
  for (let i =0; i <= this.inventory.length; i ++)
    { this.inventory.includes('laser gun');
    // this hasLaser hasn't work yet. Needs work.
    }
  }

  increaseStats() {
  this.aim += 1;
  this.health += 1;
}

shootLaser() {
  if (this.aim === 0) {
   this.damage = 1 + Math.floor(Math.random() * 6);
  } else {
   this.damage = 3 + Math.floor(Math.random() * 6);
  } 
  return this.damage;
}

}
