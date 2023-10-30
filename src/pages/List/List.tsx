import React from 'react';
import { Link } from 'react-router-dom';
import { list } from '../../data/list';
import { deleteCharacter, storeCharacter } from '../../data/store';
import { Character } from '../../types';

export const List: React.FC = () => {
  return (
    <main>
      <h2 className="pl-2">Characters</h2>
      <ul className="mb-2">
        {list.map(({ name }) => (
          <li key={name}>
            {name}
            <span className="ml-2">
              <Link to={`/${name}`}>View</Link>
            </span>
            <span className="ml-2">
              <Link to={`/${name}/edit`}>Edit</Link>
            </span>
            <button
              className="ml-4"
              type="button"
              onClick={() => {
                if (
                  window.confirm(`Are you sure you want to delete ${name}?`)
                ) {
                  deleteCharacter(name);
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
            const file = e.currentTarget.files![0];
            const reader = new FileReader();
            reader.onload = (e) => {
              console.log(e.target?.result);
              if (e.target?.result) {
                const character: Character = JSON.parse(
                  e.target.result as string,
                );
                character.name = character.name.split('---')[0];
                storeCharacter(character);
                window.location.assign(`/${character.name}/edit`);
              }
            };
            reader.readAsText(file);
          }}
        />
      </label>
    </main>
  );
};
