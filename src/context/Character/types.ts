import { Character } from '../../types';

export interface CharacterContext {
  characters: Character[];
  deleteCharacter: (name: string) => void;
  storeCharacter: (character: Character) => void;
}
