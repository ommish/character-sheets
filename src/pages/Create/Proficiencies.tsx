import { capitalize } from 'lodash';
import React from 'react';
import { addProficiency } from '../../formUtils/addProficiency';
import { PROFICIENCIES } from '../../types';

export const Proficiencies: React.FC = () => {
  return (
    <fieldset className="proficiencies">
      <legend>Proficiencies</legend>
      {PROFICIENCIES.map((proficiency) => (
        <React.Fragment key={proficiency}>
          <fieldset id={`proficiencies.${proficiency}`}>
            <legend>{capitalize(proficiency)}</legend>
          </fieldset>
          <div className="add">
            <button
              className="proficiencies"
              type="button"
              onClick={() => {
                addProficiency(proficiency);
              }}
            >
              Add {proficiency} proficiency
            </button>
          </div>
        </React.Fragment>
      ))}
    </fieldset>
  );
};
