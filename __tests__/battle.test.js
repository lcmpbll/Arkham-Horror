import Character from '../src/js/character.js';
import {battle} from '../src/js/battle.js';
import Monster from '../src/js/monster.js';

describe('battle', () => {
  let newChar;
  let newMonster;

  beforeEach(() => {
    newChar = new Character();
    newMonster = new Monster();
  });

  test('should have a character and monster battle', () => {
    expect(battle(newChar, newMonster)).toEqual("Battle is happening");
  });

  test("should take the character damage value away from the monster health", () => {
    battle(newChar, newMonster);
    expect(newMonster.health).toBeGreaterThanOrEqual(1);
    expect(newMonster.health).toBeLessThanOrEqual(10);
  })

  test("should take the monster damage value away from the character health", () => {
    battle(newChar, newMonster);
    expect(newChar.health).toBeGreaterThanOrEqual(1);
    expect(newChar.health).toBeLessThanOrEqual(10);
  })
  test("should report that character is alive if their health is above 0", () => {
    battle(newChar, newMonster);
    expect(newChar.status).toEqual("alive");
  })
  test('should report that the character is dead if their health goes to 0 or below', () => {
    battle(newChar, newMonster); 
    battle(newChar, newMonster);
    battle(newChar, newMonster);
    battle(newChar, newMonster);
    battle(newChar, newMonster);
    battle(newChar, newMonster);
    expect(newChar.health).toBeLessThanOrEqual(1);
    expect(newChar.status).toEqual("dead");
  })

  test('should report that the monster is dead if their health goes to 0 or below', () => {
    battle(newChar, newMonster); 
    battle(newChar, newMonster);
    battle(newChar, newMonster);
    battle(newChar, newMonster);
    battle(newChar, newMonster);
    battle(newChar, newMonster);
    expect(newMonster.health).toBeLessThanOrEqual(0);
    expect(newMonster.status).toEqual("dead");
  })
  
})