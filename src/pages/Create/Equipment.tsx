import React from 'react';
import { addEquipment } from '../../formUtils/addEquipment';

export const Equipment: React.FC = () => {
  return (
    <>
      <fieldset className="equipment" id="equipment">
        <legend>Items</legend>
      </fieldset>
      <div className="add">
        <button
          className="equipment"
          type="button"
          onClick={() => {
            addEquipment();
          }}
        >
          Add Item
        </button>
      </div>
    </>
  );
};
