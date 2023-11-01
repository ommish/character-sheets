import { Character } from '../types';

export const exportCharacter = (character: Character) => {
  const json = URL.createObjectURL(
    new Blob([JSON.stringify(character, null, 2)], {
      type: 'application/json',
    }),
  );

  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = json;
  a.download = `${character.name}---${new Date().toDateString()}.json`;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(json);
};
