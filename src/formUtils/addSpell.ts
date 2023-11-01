import { getOnRemove } from '../pages/Create/getOnRemove';
import { Spell } from '../types';
import {
  NAME_ID,
  NOTES_ID,
  PREPARED_ID,
  SPELL_LIST_ID,
  SPELL_LIST_N_ID,
} from './formIds';
import { getElement } from './getElement';
import { makeLabel } from './makeLabel';

export const addSpell = (level: string, spell?: Spell) => {
  const list = getElement(SPELL_LIST_ID(level));
  const index = list.children.length - 1;
  const fieldSet = document.createElement('fieldset');

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.innerHTML = '❌';
  remove.onclick = getOnRemove([
    (idx) => NAME_ID(SPELL_LIST_N_ID(level, idx)),
    (idx) => NOTES_ID(SPELL_LIST_N_ID(level, idx)),
    (idx) => PREPARED_ID(SPELL_LIST_N_ID(level, idx)),
  ]);

  const legend = document.createElement('legend');
  legend.innerText = (index + 1).toString();

  const nameLabel = makeLabel('Name');
  const name = document.createElement('input');
  name.name = NAME_ID(SPELL_LIST_N_ID(level, index));
  name.id = name.name;
  name.required = true;
  name.value = spell?.name ?? '';
  nameLabel.appendChild(name);

  const notesLabel = makeLabel('Description');
  const notes = document.createElement('textarea');
  notes.name = NOTES_ID(SPELL_LIST_N_ID(level, index));
  notes.id = notes.name;
  notes.value = spell?.notes ?? '';
  notesLabel.appendChild(notes);

  const preparedLabel = makeLabel('Prepared');
  const prepared = document.createElement('input');
  prepared.name = PREPARED_ID(SPELL_LIST_N_ID(level, index));
  prepared.id = prepared.name;
  prepared.type = 'checkbox';
  prepared.checked = spell?.prepared ?? false;
  preparedLabel.appendChild(prepared);

  fieldSet.append(remove, legend, nameLabel, notesLabel, preparedLabel);
  list.append(fieldSet);
};
