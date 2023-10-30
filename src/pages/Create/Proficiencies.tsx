import React from 'react';
import { PROFICIENCIES, Proficiency, ProficiencyCategory } from '../../types';
import { capitalize } from 'lodash';
import { getOnRemove } from './getOnRemove';

export const addProficiency = (
  category: ProficiencyCategory,
  proficiency?: Proficiency,
) => {
  const list = document.getElementById(`proficiencies.${category}`)!;
  const index = list.children.length - 1;
  const fieldSet = document.createElement('fieldset');

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.innerHTML = '❌';
  remove.onclick = getOnRemove([
    (idx) => `proficiencies.${category}.${idx}.name`,
    (idx) => `proficiencies.${category}.${idx}.notes`,
  ]);

  const legend = document.createElement('legend');
  legend.innerText = (index + 1).toString();

  const nameLabel = document.createElement('label');
  nameLabel.innerText = 'Name';
  const name = document.createElement('input');
  name.name = `proficiencies.${category}.${index}.name`;
  name.id = `proficiencies.${category}.${index}.name`;
  name.required = true;
  name.value = proficiency?.name || '';
  nameLabel.appendChild(name);

  const notesLabel = document.createElement('label');
  notesLabel.innerText = 'Notes';
  const notes = document.createElement('textarea');
  notes.name = `proficiencies.${category}.${index}.notes`;
  notes.id = `proficiencies.${category}.${index}.notes`;
  notes.value = proficiency?.notes || '';
  notesLabel.appendChild(notes);
  fieldSet.append(remove, legend, nameLabel, notesLabel);
  list.append(fieldSet);
};

export const Proficiencies: React.FC = () => {
  return (
    <fieldset>
      <legend>Proficiencies</legend>
      {PROFICIENCIES.map((proficiency) => (
        <div>
          <fieldset id={`proficiencies.${proficiency}`}>
            <legend>{capitalize(proficiency)}</legend>
          </fieldset>
          <div className="add">
            <button type="button" onClick={() => addProficiency(proficiency)}>
              Add {proficiency} proficiency
            </button>
          </div>
        </div>
      ))}
    </fieldset>
  );
};
