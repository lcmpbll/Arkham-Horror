import Monster from '../src/js/monster.js';

describe("Monster", () => {
  let newMonster;
  
  beforeEach(() => {
    newMonster = new Monster();
  });

  test("should create a monster whose health is equal to 10", () => {
    expect(newMonster.health).toEqual(10);
  });
});