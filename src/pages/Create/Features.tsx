import React from 'react';
import { addFeature } from '../../formUtils/addFeature';

export const Features: React.FC = () => {
  return (
    <>
      <fieldset className="features" id="features">
        <legend>Features</legend>
      </fieldset>
      <div className="add">
        <button
          className="features"
          type="button"
          onClick={() => {
            addFeature();
          }}
        >
          Add Feature
        </button>
      </div>
    </>
  );
};
