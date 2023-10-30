import React from 'react';
import { Item } from '../../types';
import { getOnRemove } from './getOnRemove';

export const addEquipment = (equipment?: Item) => {
  const list = document.getElementById('equipment')!;
  const index = list.children.length - 1;
  const fieldSet = document.createElement('fieldset');

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.innerHTML = '❌';
  remove.onclick = getOnRemove([
    (idx) => `equipment.${idx}.name`,
    (idx) => `equipment.${idx}.notes`,
  ]);

  const legend = document.createElement('legend');
  legend.innerText = (index + 1).toString();

  const nameLabel = document.createElement('label');
  nameLabel.innerText = 'Name';
  const name = document.createElement('input');
  name.name = `equipment.${index}.name`;
  name.id = `equipment.${index}.name`;
  name.required = true;
  name.value = equipment?.name || '';

  nameLabel.appendChild(name);
  const notesLabel = document.createElement('label');
  notesLabel.innerText = 'Notes';
  const notes = document.createElement('textarea');
  notes.name = `equipment.${index}.notes`;
  notes.id = `equipment.${index}.notes`;
  notesLabel.appendChild(notes);
  notes.value = equipment?.notes || '';

  fieldSet.append(remove, legend, nameLabel, notesLabel);
  list.append(fieldSet);
};

export const Equipment: React.FC = () => {
  return (
    <div>
      <fieldset id="equipment">
        <legend>Items</legend>
      </fieldset>
      <div className="add">
        <button type="button" onClick={() => addEquipment()}>
          Add Item
        </button>
      </div>
    </div>
  );
};
