import { getOnRemove } from '../pages/Create/getOnRemove';
import { Feature } from '../types';
import {
  DESCRIPTION_ID,
  FEATURES_ID,
  FEATURES_N_ID,
  NAME_ID,
  REMAINING_USES_ID,
  TOTAL_USES_ID,
} from './formIds';
import { getElement } from './getElement';
import { makeLabel } from './makeLabel';

export const addFeature = (feature?: Feature) => {
  const list = getElement(FEATURES_ID());
  const index = list.children.length - 1;
  const fieldSet = document.createElement('fieldset');

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.innerHTML = '❌';
  remove.onclick = getOnRemove([
    (idx) => NAME_ID(FEATURES_N_ID(idx)),
    (idx) => DESCRIPTION_ID(FEATURES_N_ID(idx)),
  ]);

  const legend = document.createElement('legend');
  legend.innerText = (index + 1).toString();

  const nameLabel = makeLabel('Name');
  const name = document.createElement('input');
  name.name = NAME_ID(FEATURES_N_ID(index));
  name.id = name.name;
  name.required = true;
  name.value = feature?.name ?? '';
  nameLabel.appendChild(name);

  const descriptionLabel = makeLabel('Notes');
  const description = document.createElement('textarea');
  description.name = DESCRIPTION_ID(FEATURES_N_ID(index));
  description.id = description.name;
  description.value = feature?.description ?? '';
  descriptionLabel.appendChild(description);

  const usesFieldSet = document.createElement('fieldset');
  const usesLegend = document.createElement('legend');
  usesLegend.innerText = 'Num. Uses';

  const totalUsesLabel = makeLabel('Total');
  const totalUses = document.createElement('input');
  totalUses.name = TOTAL_USES_ID(FEATURES_N_ID(index));
  totalUses.id = totalUses.name;
  totalUses.type = 'number';
  totalUses.step = '1';
  totalUses.min = '0';
  totalUses.value = feature?.uses?.total.toString() ?? '';
  totalUsesLabel.appendChild(totalUses);

  const remainingUsesLabel = makeLabel('Remaining');
  remainingUsesLabel.className = 'hidden';
  const remainingUses = document.createElement('input');
  remainingUses.name = REMAINING_USES_ID(FEATURES_N_ID(index));
  remainingUses.id = remainingUses.name;
  remainingUses.type = 'number';
  remainingUses.value = feature?.uses?.remaining.toString() ?? '';
  remainingUsesLabel.appendChild(remainingUses);

  usesFieldSet.append(usesLegend, totalUsesLabel, remainingUsesLabel);

  fieldSet.append(remove, legend, nameLabel, descriptionLabel, usesFieldSet);
  list.append(fieldSet);
};
