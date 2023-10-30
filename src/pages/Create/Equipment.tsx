import React from 'react';
import { addEquipment } from '../../formUtils/addEquipment';

export const Equipment: React.FC = () => {
  return (
    <div>
      <fieldset id="equipment">
        <legend>Items</legend>
      </fieldset>
      <div className="add">
        <button
          type="button"
          onClick={() => {
            addEquipment();
          }}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};
