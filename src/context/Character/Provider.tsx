import React, { ReactNode, useMemo, useState } from 'react';
import {
  deleteCharacter,
  getStoredCharacters,
  storeCharacter,
} from '../../data/store';
import { CharacterContext } from './Context';
import { CharacterContext as ICharacterContext } from './types';

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [characters, setCharacters] = useState(getStoredCharacters());

  const context = useMemo<ICharacterContext>(
    () => ({
      characters,
      storeCharacter: (newCharacter) => {
        let newCharacters = characters;
        if (characters.find((char) => char.name === newCharacter.name)) {
          newCharacters = characters.map((char) =>
            char.name === newCharacter.name ? newCharacter : char,
          );
        } else {
          newCharacters = characters.concat(newCharacter);
        }
        storeCharacter(newCharacter);
        setCharacters(newCharacters);
      },
      deleteCharacter: (name) => {
        deleteCharacter(name);
        setCharacters(characters.filter((char) => char.name !== name));
      },
    }),
    [characters, setCharacters],
  );

  return (
    <CharacterContext.Provider value={context}>
      {children}
    </CharacterContext.Provider>
  );
};
