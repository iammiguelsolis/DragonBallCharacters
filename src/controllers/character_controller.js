// controllers/character_controller.js
import { CharacterData } from '../data/character_data';
import { Character } from '../models/character_model';

export class CharacterController {
  static getCharacterByPage(page) {
    const data = CharacterData.fetchCharacters(page);
    const newData = data.then((res) => res.items.map((item) => new Character(item)));
    return newData;
  }

  // controllers/character_controller.js
  static async getCharacterById(id) {
    const data = await CharacterData.fetchCharacterById(id);
    return new Character(data);
  }
}