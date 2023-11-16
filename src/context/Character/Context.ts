import React from 'react';
import { CharacterContext as ICharacterContext } from './types';

const defaultFunc = () => {
  throw new Error('DiceContext is not initialized');
};

export const CharacterContext = React.createContext<ICharacterContext>({
  characters: [],
  deleteCharacter: defaultFunc,
  storeCharacter: defaultFunc,
});
