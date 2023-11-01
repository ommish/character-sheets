import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteCharacter, storeCharacter } from '../../data/store';
import { Character } from '../../types';
import { useCharacters } from '../../hooks/useCharacters';
import { exportCharacter } from '../../data/export';

export const List: React.FC = () => {
  const navigate = useNavigate();
  const characters = useCharacters();
  return (
    <main>
      <h2 className="pl-2">Characters</h2>
      <ul className="mb-2">
        {characters.map((character) => (
          <li key={character.name} className="mb-1">
            {character.name}
            <span className="ml-2">
              <Link to={`/${character.name}`}>View</Link>
            </span>
            <span className="ml-2">
              <Link to={`/${character.name}/edit`}>Edit</Link>
            </span>
            <button
              type="button"
              className="ml-2"
              onClick={() => {
                exportCharacter(character);
              }}
            >
              Export
            </button>
            <button
              type="button"
              className="ml-4"
              onClick={() => {
                if (
                  window.confirm(
                    `Are you sure you want to delete ${character.name}?`,
                  )
                ) {
                  deleteCharacter(character.name);
                  window.location.reload();
                }
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      <div className="pl-2 mb-2">
        <Link to="/create">Create New Character</Link>
      </div>
      <label className="pl-2 pr-2">
        Import from JSON:
        <input
          className="pl-2"
          type="file"
          accept=".json"
          onChange={(e) => {
            if (!e.currentTarget.files) {
              return;
            }
            const file = e.currentTarget.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
              if (!e.target) {
                return;
              }
              const result = e.target.result;
              if (typeof result === 'string') {
                const character = JSON.parse(result) as Character;
                character.name = character.name.split('---')[0];
                storeCharacter(character);
                navigate(`/${character.name}`);
              }
            };
            reader.readAsText(file);
          }}
        />
      </label>
    </main>
  );
};
