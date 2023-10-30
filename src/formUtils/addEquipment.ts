import { getOnRemove } from '../pages/Create/getOnRemove';
import { Item } from '../types';
import {
  EQUIPMENT_ID,
  EQUIPMENT_N_ID,
  ITEM_N_NAME_ID,
  ITEM_N_NOTES_ID,
} from './formIds';
import { getElement } from './getElement';

export const addEquipment = (equipment?: Item) => {
  const list = getElement(EQUIPMENT_ID());
  const index = list.children.length - 1;
  const fieldSet = document.createElement('fieldset');

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.innerHTML = '❌';
  remove.onclick = getOnRemove([
    (idx) => ITEM_N_NAME_ID(EQUIPMENT_N_ID(idx)),
    (idx) => ITEM_N_NOTES_ID(EQUIPMENT_N_ID(idx)),
  ]);

  const legend = document.createElement('legend');
  legend.innerText = (index + 1).toString();

  const nameLabel = document.createElement('label');
  nameLabel.innerText = 'Name';
  const name = document.createElement('input');
  name.name = ITEM_N_NAME_ID(EQUIPMENT_N_ID(index));
  name.id = ITEM_N_NAME_ID(EQUIPMENT_N_ID(index));
  name.required = true;
  name.value = equipment?.name ?? '';

  nameLabel.appendChild(name);
  const notesLabel = document.createElement('label');
  notesLabel.innerText = 'Notes';
  const notes = document.createElement('textarea');
  notes.name = ITEM_N_NOTES_ID(EQUIPMENT_N_ID(index));
  notes.id = ITEM_N_NOTES_ID(EQUIPMENT_N_ID(index));
  notesLabel.appendChild(notes);
  notes.value = equipment?.notes ?? '';

  fieldSet.append(remove, legend, nameLabel, notesLabel);
  list.append(fieldSet);
};
