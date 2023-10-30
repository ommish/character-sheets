import { getOnRemove } from '../pages/Create/getOnRemove';
import { Feature } from '../types';
import {
  FEATURES_ID,
  FEATURES_N_ID,
  ITEM_N_DESCRIPTION_ID,
  ITEM_N_NAME_ID,
} from './formIds';
import { getElement } from './getElement';

export const addFeature = (feature?: Feature) => {
  const list = getElement(FEATURES_ID());
  const index = list.children.length - 1;
  const fieldSet = document.createElement('fieldset');

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.innerHTML = '❌';
  remove.onclick = getOnRemove([
    (idx) => ITEM_N_NAME_ID(FEATURES_N_ID(idx)),
    (idx) => ITEM_N_DESCRIPTION_ID(FEATURES_N_ID(idx)),
  ]);

  const legend = document.createElement('legend');
  legend.innerText = (index + 1).toString();

  const nameLabel = document.createElement('label');
  nameLabel.innerText = 'Name';
  const name = document.createElement('input');
  name.name = ITEM_N_NAME_ID(FEATURES_N_ID(index));
  name.id = ITEM_N_NAME_ID(FEATURES_N_ID(index));
  name.required = true;
  nameLabel.appendChild(name);
  name.value = feature?.name ?? '';

  const descriptionLabel = document.createElement('label');
  descriptionLabel.innerText = 'Notes';
  const description = document.createElement('textarea');
  description.name = ITEM_N_DESCRIPTION_ID(FEATURES_N_ID(index));
  description.id = ITEM_N_DESCRIPTION_ID(FEATURES_N_ID(index));
  descriptionLabel.appendChild(description);
  description.value = feature?.description ?? '';

  fieldSet.append(remove, legend, nameLabel, descriptionLabel);
  list.append(fieldSet);
};
