import Character from '../src/js/biz-func.js';


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

    test("should create a character whose this.inventory is empty", () => {
      
      expect(newChar.inventory.length).toEqual(0);
      
    });

    test("should create a character whose this.health is equal to 0", () => {
      
      expect(newChar.aim).toEqual(0);
    });

    test("should pick up laser and confirm true for laserPossession", () => {
      newChar.pickUpLaser();
      expect(newChar.laserPosession).toEqual(true);
    })

    test("should pick up laser and confirm true for laserPossession", () => {
      newChar.pickUpLaser();
      expect(newChar.inventory.length).toEqual(1);
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
      newChar.shootLaser();
      expect(newChar.damage).toBeGreaterThanOrEqual(3);
      expect(newChar.damage).toBeLessThanOrEqual(6);
      
    })

  })


