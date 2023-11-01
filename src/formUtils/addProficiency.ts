import { getOnRemove } from '../pages/Create/getOnRemove';
import { Proficiency, ProficiencyCategory } from '../types';
import {
  NAME_ID,
  NOTES_ID,
  PROFICIENCIES_ID,
  PROFICIENCIES_N_ID,
} from './formIds';
import { getElement } from './getElement';
import { makeLabel } from './makeLabel';

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
    (idx) => NAME_ID(PROFICIENCIES_N_ID(category, idx)),
    (idx) => NOTES_ID(PROFICIENCIES_N_ID(category, idx)),
  ]);

  const legend = document.createElement('legend');
  legend.innerText = (index + 1).toString();

  const nameLabel = makeLabel('Name');
  const name = document.createElement('input');
  name.name = NAME_ID(PROFICIENCIES_N_ID(category, index));
  name.id = name.name;
  name.required = true;
  name.value = proficiency?.name ?? '';
  nameLabel.appendChild(name);

  const notesLabel = makeLabel('Notes');
  const notes = document.createElement('textarea');
  notes.name = NOTES_ID(PROFICIENCIES_N_ID(category, index));
  notes.id = notes.name;
  notes.value = proficiency?.notes ?? '';
  notesLabel.appendChild(notes);

  fieldSet.append(remove, legend, nameLabel, notesLabel);
  list.append(fieldSet);
};
