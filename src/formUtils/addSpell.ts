import { getOnRemove } from '../pages/Create/getOnRemove';
import { Spell } from '../types';
import {
  ITEM_N_NAME_ID,
  ITEM_N_NOTES_ID,
  ITEM_N_PREPARED_ID,
  SPELL_LIST_ID,
  SPELL_LIST_N_ID,
} from './formIds';
import { getElement } from './getElement';

export const addSpell = (level: string, spell?: Spell) => {
  const list = getElement(SPELL_LIST_ID(level));
  const index = list.children.length - 1;
  const fieldSet = document.createElement('fieldset');

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.innerHTML = '❌';
  remove.onclick = getOnRemove([
    (idx) => ITEM_N_NAME_ID(SPELL_LIST_N_ID(level, idx)),
    (idx) => ITEM_N_NOTES_ID(SPELL_LIST_N_ID(level, idx)),
    (idx) => ITEM_N_PREPARED_ID(SPELL_LIST_N_ID(level, idx)),
  ]);

  const legend = document.createElement('legend');
  legend.innerText = (index + 1).toString();

  const nameLabel = document.createElement('label');
  nameLabel.innerText = 'Name';
  const name = document.createElement('input');
  name.name = ITEM_N_NAME_ID(SPELL_LIST_N_ID(level, index));
  name.id = ITEM_N_NAME_ID(SPELL_LIST_N_ID(level, index));
  name.required = true;
  nameLabel.appendChild(name);
  name.value = spell?.name ?? '';

  const notesLabel = document.createElement('label');
  notesLabel.innerText = 'Description';
  const notes = document.createElement('textarea');
  notes.name = ITEM_N_NOTES_ID(SPELL_LIST_N_ID(level, index));
  notes.id = ITEM_N_NOTES_ID(SPELL_LIST_N_ID(level, index));
  notesLabel.appendChild(notes);
  notes.value = spell?.notes ?? '';

  const preparedLabel = document.createElement('label');
  preparedLabel.innerText = 'Prepared';
  const prepared = document.createElement('input');
  prepared.name = ITEM_N_PREPARED_ID(SPELL_LIST_N_ID(level, index));
  prepared.id = ITEM_N_PREPARED_ID(SPELL_LIST_N_ID(level, index));
  prepared.type = 'checkbox';
  preparedLabel.appendChild(prepared);
  prepared.checked = spell?.prepared ?? false;

  fieldSet.append(remove, legend, nameLabel, notesLabel, preparedLabel);
  list.append(fieldSet);
};
