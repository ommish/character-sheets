import { capitalize } from 'lodash';
import { getOnRemove } from '../pages/Create/getOnRemove';
import { ABILITIES, DAMAGE_TYPES, DICE, Weapon } from '../types';
import {
  ITEM_N_ABILITY_ID,
  ITEM_N_ADD_TO_DAMAGE_ID,
  ITEM_N_ADD_TO_HIT_ID,
  ITEM_N_DAMAGE_COUNT_ID,
  ITEM_N_DAMAGE_DIE_ID,
  ITEM_N_DAMAGE_TYPE_ID,
  ITEM_N_NAME_ID,
  ITEM_N_NOTES_ID,
  ITEM_N_PROFICIENT_ID,
  WEAPONS_ID,
  WEAPONS_N_ID,
} from './formIds';
import { getElement } from './getElement';

export const addWeapon = (weapon?: Weapon) => {
  const list = getElement(WEAPONS_ID());
  const index = list.children.length - 1;
  const fieldSet = document.createElement('fieldset');

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.innerHTML = '❌';
  remove.onclick = getOnRemove([
    (idx) => ITEM_N_NAME_ID(WEAPONS_N_ID(idx)),
    (idx) => ITEM_N_PROFICIENT_ID(WEAPONS_N_ID(idx)),
    (idx) => ITEM_N_ABILITY_ID(WEAPONS_N_ID(idx)),
    (idx) => ITEM_N_DAMAGE_DIE_ID(WEAPONS_N_ID(idx)),
    (idx) => ITEM_N_DAMAGE_COUNT_ID(WEAPONS_N_ID(idx)),
    (idx) => ITEM_N_DAMAGE_TYPE_ID(WEAPONS_N_ID(idx)),
    (idx) => ITEM_N_ADD_TO_HIT_ID(WEAPONS_N_ID(idx)),
    (idx) => ITEM_N_ADD_TO_DAMAGE_ID(WEAPONS_N_ID(idx)),
    (idx) => ITEM_N_NOTES_ID(WEAPONS_N_ID(idx)),
  ]);

  const legend = document.createElement('legend');
  legend.innerText = (index + 1).toString();

  // Name
  const nameLabel = document.createElement('label');
  nameLabel.innerText = 'Name';
  const name = document.createElement('input');
  name.name = ITEM_N_NAME_ID(WEAPONS_N_ID(index));
  name.id = ITEM_N_NAME_ID(WEAPONS_N_ID(index));
  name.required = true;
  name.value = weapon?.name ?? '';
  nameLabel.appendChild(name);

  // Proficient
  const proficientLabel = document.createElement('label');
  proficientLabel.innerText = 'Proficient';
  const proficient = document.createElement('input');
  proficient.name = ITEM_N_PROFICIENT_ID(WEAPONS_N_ID(index));
  proficient.id = ITEM_N_PROFICIENT_ID(WEAPONS_N_ID(index));
  proficient.type = 'checkbox';
  proficient.checked = weapon?.proficient ?? false;
  proficientLabel.appendChild(proficient);

  // Ability
  const abilityLabel = document.createElement('label');
  abilityLabel.innerText = 'Ability Modifier';
  const ability = document.createElement('select');
  ability.name = ITEM_N_ABILITY_ID(WEAPONS_N_ID(index));
  ability.id = ITEM_N_ABILITY_ID(WEAPONS_N_ID(index));
  ability.required = true;
  ability.value = weapon?.ability ?? ABILITIES[0];
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
  die.name = ITEM_N_DAMAGE_DIE_ID(WEAPONS_N_ID(index));
  die.id = ITEM_N_DAMAGE_DIE_ID(WEAPONS_N_ID(index));
  die.required = true;
  die.value = weapon?.damage.die ?? DICE[0];
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
  count.name = ITEM_N_DAMAGE_COUNT_ID(WEAPONS_N_ID(index));
  count.id = ITEM_N_DAMAGE_COUNT_ID(WEAPONS_N_ID(index));
  count.type = 'number';
  count.step = '1';
  count.required = true;
  count.value = weapon?.damage.count.toString() ?? '';
  countLabel.appendChild(count);

  // Damage - Type
  const typeLabel = document.createElement('label');
  typeLabel.innerText = 'Damage Type';
  const type = document.createElement('select');
  type.name = ITEM_N_DAMAGE_TYPE_ID(WEAPONS_N_ID(index));
  type.id = ITEM_N_DAMAGE_TYPE_ID(WEAPONS_N_ID(index));
  type.required = true;
  type.value = weapon?.damage.type ?? DAMAGE_TYPES[0];
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
  hitBonus.name = ITEM_N_ADD_TO_HIT_ID(WEAPONS_N_ID(index));
  hitBonus.id = ITEM_N_ADD_TO_HIT_ID(WEAPONS_N_ID(index));
  hitBonus.type = 'number';
  hitBonus.step = '1';
  hitBonus.value = weapon?.additionalToHit.toString() ?? '';
  hitBonusLabel.appendChild(hitBonus);

  // Bonus Damage
  const damageBonusLabel = document.createElement('label');
  damageBonusLabel.innerText = 'Bonus Damage';
  const damageBonus = document.createElement('input');
  damageBonus.name = ITEM_N_ADD_TO_DAMAGE_ID(WEAPONS_N_ID(index));
  damageBonus.id = ITEM_N_ADD_TO_DAMAGE_ID(WEAPONS_N_ID(index));
  damageBonus.type = 'number';
  damageBonus.step = '1';
  damageBonus.value = weapon?.additionalDamage.toString() ?? '';

  damageBonusLabel.appendChild(damageBonus);

  // Notes
  const notesLabel = document.createElement('label');
  notesLabel.innerText = 'Notes';
  const notes = document.createElement('textarea');
  notes.name = ITEM_N_NOTES_ID(WEAPONS_N_ID(index));
  notes.id = ITEM_N_NOTES_ID(WEAPONS_N_ID(index));
  notes.value = weapon?.notes ?? '';
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
