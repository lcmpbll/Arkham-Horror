import Character from '../src/js/character.js';


describe("Character", () => {
  let newChar;

  beforeEach(() => {
    newChar = new Character();
  });

    test("should create a character whose health is equal to 10", () => {
      
      expect(newChar.health).toEqual(10);
    
    });
    test("should create a character whose this.laserPosession is equal to false", () => {
      
      expect(newChar.laserPosession).toEqual(false);
      
    });


    test("should create a character whose this.health is equal to 0", () => {
      expect(newChar.aim).toEqual(0);
    });

    test("should pick up laser and confirm true for laserPossession", () => {
      newChar.pickUpLaser();
      expect(newChar.laserPosession).toEqual(true);
    })
    
    test("should increase aim and health when increaseStats is run", () => {
      newChar.increaseStats();
      expect(newChar.aim).toEqual(1);
      expect(newChar.health).toEqual(11);
    })

    test("Should return damage between 0-6 when shootLaser is called", () => {
      newChar.shootLaser();
      expect(newChar.damage).toBeGreaterThanOrEqual(0);
      expect(newChar.damage).toBeLessThanOrEqual(6);
      
    })

    test("Should return damage between 3-6 when shootLaser is called", () => {
      newChar.increaseStats();
      newChar.pickUpLaser();
      newChar.shootLaser();
      expect(newChar.damage).toBeGreaterThanOrEqual(3);
      expect(newChar.damage).toBeLessThanOrEqual(6);
      
    })

    test("Should have zero ammo when character has not found laser gun or ammo", () => {
      expect(newChar.ammo).toEqual(0);
    })

    test("Should add two ammo when character finds laser gun", () => {
      newChar.pickUpLaser();
      expect(newChar.ammo).toEqual(2);
    })

    test("Should add an ammo to the count when findAmmo() is called", () => {
      newChar.findAmmo();
      expect(newChar.ammo).toEqual(2)
    })

    test("Should read this.cellar as false if the character has not been in the cellar", () => {
      expect(newChar.cellar).toEqual(false);
    })

    test("Should read char.cellar as true after cellarExploration is called", () => {
      newChar.cellarExploration();
      expect(newChar.cellar).toEqual(true);
    })

    test("Should remove ammo from the count if the character shoots laser", () => {
      newChar.pickUpLaser();
      newChar.shootLaser();
      expect(newChar.ammo).toEqual(1);
    })

    test("Should do no damage if there isn't any ammo", () => {
      newChar.pickUpLaser();
      newChar.shootLaser();
      newChar.shootLaser();
      newChar.shootLaser();
      expect(newChar.damage).toEqual(0);
    })

    test("Should have 4 ammo after picking up ammo and finding the laser gun", () => {
      newChar.pickUpLaser();
      newChar.findAmmo();
      expect(newChar.ammo).toEqual(4);
    })

  })


