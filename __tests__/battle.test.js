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
})