import { capitalize } from 'lodash';
import React from 'react';
import { addProficiency } from '../../formUtils/addProficiency';
import { PROFICIENCIES } from '../../types';

export const Proficiencies: React.FC = () => {
  return (
    <fieldset>
      <legend>Proficiencies</legend>
      {PROFICIENCIES.map((proficiency) => (
        <div key={proficiency}>
          <fieldset id={`proficiencies.${proficiency}`}>
            <legend>{capitalize(proficiency)}</legend>
          </fieldset>
          <div className="add">
            <button
              type="button"
              onClick={() => {
                addProficiency(proficiency);
              }}
            >
              Add {proficiency} proficiency
            </button>
          </div>
        </div>
      ))}
    </fieldset>
  );
};
