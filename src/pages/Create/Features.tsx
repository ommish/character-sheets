import React from 'react';
import { addFeature } from '../../formUtils/addFeature';

export const Features: React.FC = () => {
  return (
    <div>
      <fieldset id="features">
        <legend>Features</legend>
      </fieldset>
      <div className="add">
        <button
          type="button"
          onClick={() => {
            addFeature();
          }}
        >
          Add Feature
        </button>
      </div>
    </div>
  );
};
