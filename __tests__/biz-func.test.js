import Character from '../src/js/biz-func.js';


describe("Character", () => {
  let newChar;

  beforeEach(() => {
    newChar = new Character();
 

    test("should create a character whose health is equal to 10", () => {
      const newChar = new Character();
      expect(newChar.health).toEqual(10);
    
    });
    test("should create a character whose this.laserPosession is equal to false", () => {
      const newChar = new Character();
      expect(newChar.laserPossession).toEqual(false);
      
    });
    test("should create a character whose this.inventory is empty", () => {
      const newChar = new Character();
      expect(newChar.inventory.length).toEqual(0);
      
    });
    

  })

});
