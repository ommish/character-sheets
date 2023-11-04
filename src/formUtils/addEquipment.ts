import { getOnRemove } from '../pages/Create/getOnRemove';
import { Item } from '../types';
import { EQUIPMENT_ID, EQUIPMENT_N_ID, NAME_ID, NOTES_ID } from './formIds';
import { getElement } from './getElement';
import { makeLabel } from './makeLabel';

export const addEquipment = (equipment?: Item) => {
  const list = getElement(EQUIPMENT_ID());
  const index = list.children.length - 1;
  const fieldSet = document.createElement('fieldset');

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.innerHTML = '❌';
  remove.onclick = getOnRemove([
    (idx) => NAME_ID(EQUIPMENT_N_ID(idx)),
    (idx) => NOTES_ID(EQUIPMENT_N_ID(idx)),
  ]);

  const legend = document.createElement('legend');
  legend.innerText = (index + 1).toString();

  const nameLabel = makeLabel('Name');
  const name = document.createElement('input');
  name.name = NAME_ID(EQUIPMENT_N_ID(index));
  name.id = name.name;
  name.required = true;
  name.value = equipment?.name ?? '';
  nameLabel.appendChild(name);

  const notesLabel = makeLabel('Notes');
  const notes = document.createElement('textarea');
  notes.name = NOTES_ID(EQUIPMENT_N_ID(index));
  notes.id = notes.name;
  notes.rows = 4;
  notes.value = equipment?.notes ?? '';
  notesLabel.appendChild(notes);

  fieldSet.append(remove, legend, nameLabel, notesLabel);
  list.append(fieldSet);
};
