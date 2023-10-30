import { getOnRemove } from '../pages/Create/getOnRemove';
import { Proficiency, ProficiencyCategory } from '../types';
import {
  ITEM_N_NAME_ID,
  ITEM_N_NOTES_ID,
  PROFICIENCIES_ID,
  PROFICIENCIES_N_ID,
} from './formIds';
import { getElement } from './getElement';

export const addProficiency = (
  category: ProficiencyCategory,
  proficiency?: Proficiency,
) => {
  const list = getElement(PROFICIENCIES_ID(category));
  const index = list.children.length - 1;
  const fieldSet = document.createElement('fieldset');

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.innerHTML = '❌';
  remove.onclick = getOnRemove([
    (idx) => ITEM_N_NAME_ID(PROFICIENCIES_N_ID(category, idx)),
    (idx) => ITEM_N_NOTES_ID(PROFICIENCIES_N_ID(category, idx)),
  ]);

  const legend = document.createElement('legend');
  legend.innerText = (index + 1).toString();

  const nameLabel = document.createElement('label');
  nameLabel.innerText = 'Name';
  const name = document.createElement('input');
  name.name = ITEM_N_NAME_ID(PROFICIENCIES_N_ID(category, index));
  name.id = ITEM_N_NAME_ID(PROFICIENCIES_N_ID(category, index));
  name.required = true;
  name.value = proficiency?.name ?? '';
  nameLabel.appendChild(name);

  const notesLabel = document.createElement('label');
  notesLabel.innerText = 'Notes';
  const notes = document.createElement('textarea');
  notes.name = ITEM_N_NOTES_ID(PROFICIENCIES_N_ID(category, index));
  notes.id = ITEM_N_NOTES_ID(PROFICIENCIES_N_ID(category, index));
  notes.value = proficiency?.notes ?? '';
  notesLabel.appendChild(notes);
  fieldSet.append(remove, legend, nameLabel, notesLabel);
  list.append(fieldSet);
};
