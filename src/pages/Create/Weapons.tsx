import React from 'react';
import { ABILITIES, DAMAGE_TYPES, DICE, Weapon } from '../../types';
import { capitalize } from 'lodash';
import { getOnRemove } from './getOnRemove';

export const addWeapon = (weapon?: Weapon) => {
  const list = document.getElementById('weapons')!;
  const index = list.children.length - 1;
  const fieldSet = document.createElement('fieldset');

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.innerHTML = '❌';
  remove.onclick = getOnRemove([
    (idx) => `weapons.${idx}.name`,
    (idx) => `weapons.${idx}.proficient`,
    (idx) => `weapons.${idx}.ability`,
    (idx) => `weapons.${idx}.damage.die`,
    (idx) => `weapons.${idx}.damage.count`,
    (idx) => `weapons.${idx}.damage.type`,
    (idx) => `weapons.${idx}.additionalToHit`,
    (idx) => `weapons.${idx}.additionalDamage`,
    (idx) => `weapons.${idx}.notes`,
  ]);

  const legend = document.createElement('legend');
  legend.innerText = (index + 1).toString();

  // Name
  const nameLabel = document.createElement('label');
  nameLabel.innerText = 'Name';
  const name = document.createElement('input');
  name.name = `weapons.${index}.name`;
  name.id = `weapons.${index}.name`;
  name.required = true;
  name.value = weapon?.name || '';
  nameLabel.appendChild(name);

  // Proficient
  const proficientLabel = document.createElement('label');
  proficientLabel.innerText = 'Proficient';
  const proficient = document.createElement('input');
  proficient.name = `weapons.${index}.proficient`;
  proficient.id = `weapons.${index}.proficient`;
  proficient.type = 'checkbox';
  proficient.checked = weapon?.proficient || false;
  proficientLabel.appendChild(proficient);

  // Ability
  const abilityLabel = document.createElement('label');
  abilityLabel.innerText = 'Ability Modifier';
  const ability = document.createElement('select');
  ability.name = `weapons.${index}.ability`;
  ability.id = `weapons.${index}.ability`;
  ability.required = true;
  ability.value = weapon?.ability || ABILITIES[0];
  const abilityOptions = ABILITIES.map((ability) => {
    const option = document.createElement('option');
    option.value = ability;
    option.innerText = capitalize(ability);
    return option;
  });
  ability.append(...abilityOptions);
  abilityLabel.appendChild(ability);

  // Damage - Die
  const damageSet = document.createElement('fieldset');
  const damageLegend = document.createElement('legend');
  damageLegend.innerText = 'Damage';

  const dieLabel = document.createElement('label');
  dieLabel.innerText = 'Die';
  const die = document.createElement('select');
  die.name = `weapons.${index}.damage.die`;
  die.id = `weapons.${index}.damage.die`;
  die.required = true;
  die.value = weapon?.damage.die || DICE[0];
  const dieOptions = DICE.map((die) => {
    const option = document.createElement('option');
    option.value = die;
    option.innerText = die;
    return option;
  });
  die.append(...dieOptions);
  dieLabel.appendChild(die);

  // Damage - Count
  const countLabel = document.createElement('label');
  countLabel.innerText = 'Num. Dice';
  const count = document.createElement('input');
  count.name = `weapons.${index}.damage.count`;
  count.id = `weapons.${index}.damage.count`;
  count.type = 'number';
  count.step = '1';
  count.required = true;
  count.value = weapon?.damage.count.toString() || '';
  countLabel.appendChild(count);

  // Damage - Type
  const typeLabel = document.createElement('label');
  typeLabel.innerText = 'Damage Type';
  const type = document.createElement('select');
  type.name = `weapons.${index}.damage.type`;
  type.id = `weapons.${index}.damage.type`;
  type.required = true;
  type.value = weapon?.damage.type || DAMAGE_TYPES[0];
  const typeOptions = DAMAGE_TYPES.map((type) => {
    const option = document.createElement('option');
    option.value = type;
    option.innerText = capitalize(type);
    return option;
  });
  type.append(...typeOptions);
  typeLabel.appendChild(type);

  damageSet.append(damageLegend, dieLabel, countLabel, typeLabel);

  // Bonus to Hit
  const hitBonusLabel = document.createElement('label');
  hitBonusLabel.innerText = 'Bonus to Hit';
  const hitBonus = document.createElement('input');
  hitBonus.name = `weapons.${index}.additionalToHit`;
  hitBonus.id = `weapons.${index}.additionalToHit`;
  hitBonus.type = 'number';
  hitBonus.step = '1';
  hitBonus.value = weapon?.additionalToHit.toString() || '';
  hitBonusLabel.appendChild(hitBonus);

  // Bonus Damage
  const damageBonusLabel = document.createElement('label');
  damageBonusLabel.innerText = 'Bonus Damage';
  const damageBonus = document.createElement('input');
  damageBonus.name = `weapons.${index}.additionalDamage`;
  damageBonus.id = `weapons.${index}.additionalDamage`;
  damageBonus.type = 'number';
  damageBonus.step = '1';
  damageBonus.value = weapon?.additionalDamage.toString() || '';

  damageBonusLabel.appendChild(damageBonus);

  // Notes
  const notesLabel = document.createElement('label');
  notesLabel.innerText = 'Notes';
  const notes = document.createElement('textarea');
  notes.name = `weapons.${index}.notes`;
  notes.id = `weapons.${index}.notes`;
  notes.value = weapon?.notes || '';
  notesLabel.appendChild(notes);

  fieldSet.append(
    remove,
    legend,
    nameLabel,
    proficientLabel,
    abilityLabel,
    damageSet,
    hitBonusLabel,
    damageBonusLabel,
    notesLabel,
  );
  list.append(fieldSet);
};

export const Weapons: React.FC = () => {
  return (
    <div>
      <fieldset id="weapons">
        <legend>Weapons</legend>
      </fieldset>
      <div className="add">
        <button type="button" onClick={() => addWeapon()}>
          Add weapon
        </button>
      </div>
    </div>
  );
};
