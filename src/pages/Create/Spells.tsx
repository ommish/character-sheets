import React from 'react';
import { Spell } from '../../types';
import { getOnRemove } from './getOnRemove';

export const addSpell = (level: string, spell?: Spell) => {
  const list = document.getElementById(`spells.${level}.spells`)!;
  const index = list.children.length - 1;
  const fieldSet = document.createElement('fieldset');

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.innerHTML = '❌';
  remove.onclick = getOnRemove([
    (idx) => `spells.${level}.spells.${idx}.name`,
    (idx) => `spells.${level}.spells.${idx}.notes`,
    (idx) => `spells.${level}.spells.${idx}.prepared`,
  ]);

  const legend = document.createElement('legend');
  legend.innerText = (index + 1).toString();

  const nameLabel = document.createElement('label');
  nameLabel.innerText = 'Name';
  const name = document.createElement('input');
  name.name = `spells.${level}.spells.${index}.name`;
  name.id = `spells.${level}.spells.${index}.name`;
  name.required = true;
  nameLabel.appendChild(name);
  name.value = spell?.name || '';

  const notesLabel = document.createElement('label');
  notesLabel.innerText = 'Description';
  const notes = document.createElement('textarea');
  notes.name = `spells.${level}.spells.${index}.notes`;
  notes.id = `spells.${level}.spells.${index}.notes`;
  notesLabel.appendChild(notes);
  notes.value = spell?.notes || '';

  const preparedLabel = document.createElement('label');
  preparedLabel.innerText = 'Prepared';
  const prepared = document.createElement('input');
  prepared.name = `spells.${level}.spells.${index}.prepared`;
  prepared.id = `spells.${level}.spells.${index}.prepared`;
  prepared.type = 'checkbox';
  preparedLabel.appendChild(prepared);
  prepared.checked = spell?.prepared || false;

  fieldSet.append(remove, legend, nameLabel, notesLabel, preparedLabel);
  list.append(fieldSet);
};

export const Spells: React.FC<{ level: string }> = ({ level }) => {
  return (
    <fieldset>
      <legend>{level === '0' ? 'Cantrips' : `Level ${level} Spells`}</legend>
      {level !== '0' && (
        <label>
          <span>Slots</span>
          <input
            name={`spells.${level}.total`}
            id={`spells.${level}.total`}
            type="number"
            step="1"
            min="0"
          />
        </label>
      )}
      <fieldset id={`spells.${level}.spells`}>
        <legend>Spells</legend>
      </fieldset>
      <div className="add">
        <button type="button" onClick={() => addSpell(level)}>
          Add {level === '0' ? 'Cantrip' : `Level ${level} Spell`}
        </button>
      </div>
    </fieldset>
  );
};
