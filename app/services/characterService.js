/**
 * Class to set and get player's character
 * @class character
 */
class Character {
  constructor() {
    this.character = 'Default';
  }
  /**
   * Set the character's name in `localStorage`
   * @param {String} character character's name
   * @memberof character
   */
  choose(character) {
    this.character = character;
    localStorage.setItem('character', this.character);
  }
  /**
   * @returns current character
   * @memberof character
   */
  get() {
    return localStorage.getItem('character');
  }
}

module.exports = new Character();
