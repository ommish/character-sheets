import React from 'react';
import { Feature } from '../../types';
import { getOnRemove } from './getOnRemove';

export const addFeature = (feature?: Feature) => {
  const list = document.getElementById('features')!;
  const index = list.children.length - 1;
  const fieldSet = document.createElement('fieldset');

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.innerHTML = '❌';
  remove.onclick = getOnRemove([
    (idx) => `features.${idx}.name`,
    (idx) => `features.${idx}.description`,
  ]);

  const legend = document.createElement('legend');
  legend.innerText = (index + 1).toString();

  const nameLabel = document.createElement('label');
  nameLabel.innerText = 'Name';
  const name = document.createElement('input');
  name.name = `features.${index}.name`;
  name.id = `features.${index}.name`;
  name.required = true;
  nameLabel.appendChild(name);
  name.value = feature?.name || '';

  const descriptionLabel = document.createElement('label');
  descriptionLabel.innerText = 'Notes';
  const description = document.createElement('textarea');
  description.name = `features.${index}.description`;
  description.id = `features.${index}.description`;
  descriptionLabel.appendChild(description);
  description.value = feature?.description || '';

  fieldSet.append(remove, legend, nameLabel, descriptionLabel);
  list.append(fieldSet);
};

export const Features: React.FC = () => {
  return (
    <div>
      <fieldset id="features">
        <legend>Features</legend>
      </fieldset>
      <div className="add">
        <button type="button" onClick={() => addFeature()}>
          Add Feature
        </button>
      </div>
    </div>
  );
};
