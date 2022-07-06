import Monster from '../src/js/monster.js';

describe("Monster", () => {
  let newMonster;
  
  beforeEach(() => {
    newMonster = new Monster();
  });

  test("should create a monster whose health is equal to 10", () => {
    expect(newMonster.health).toEqual(10);
  });

  test("monster should return damage between 0-6 when attack", () => {
    newMonster.monsterDamage();
    expect(newMonster.damage).toBeGreaterThanOrEqual(0);
    expect(newMonster.damage).toBeLessThanOrEqual(6);
  })
});