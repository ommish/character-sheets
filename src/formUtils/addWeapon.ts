import { capitalize } from 'lodash';
import { getOnRemove } from '../pages/Create/getOnRemove';
import { ABILITIES, DAMAGE_TYPES, DICE, Weapon, WeaponDamage } from '../types';
import {
  ABILITY_ID,
  ADD_TO_HIT_ID,
  BONUS_ID,
  COUNT_ID,
  DAMAGE_ID,
  DIE_ID,
  NAME_ID,
  NOTES_ID,
  PROFICIENT_ID,
  TYPE_ID,
  WEAPONS_ID,
  WEAPONS_N_DAMAGE_O_ID,
  WEAPONS_N_ID,
} from './formIds';
import { getElement } from './getElement';
import { makeLabel } from './makeLabel';

const addDamage = (n: number, damage?: WeaponDamage) => {
  const list = getElement(DAMAGE_ID(WEAPONS_N_ID(n)));
  const index = list.children.length - 1;

  const fieldSet = document.createElement('fieldset');

  const legend = document.createElement('legend');
  legend.innerText = `${n + 1}.${index + 1}`;

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.innerHTML = '❌';
  remove.onclick = getOnRemove([
    (idx) => DIE_ID(WEAPONS_N_DAMAGE_O_ID(n, idx)),
    (idx) => BONUS_ID(WEAPONS_N_DAMAGE_O_ID(n, idx)),
    (idx) => COUNT_ID(WEAPONS_N_DAMAGE_O_ID(n, idx)),
    (idx) => TYPE_ID(WEAPONS_N_DAMAGE_O_ID(n, idx)),
  ]);

  const damageId = WEAPONS_N_DAMAGE_O_ID(n, index);

  console.log('damage', damage);

  const dieLabel = makeLabel('Die');
  const die = document.createElement('select');
  die.name = DIE_ID(damageId);
  die.id = die.name;
  die.required = true;
  die.value = damage?.die ?? DICE[0];
  const dieOptions = DICE.map((die) => {
    const option = document.createElement('option');
    option.value = die;
    option.innerText = die;
    option.selected = die === damage?.die;
    return option;
  });
  die.append(...dieOptions);
  dieLabel.appendChild(die);

  // Damage - Count
  const countLabel = makeLabel('Num. Dice');
  const count = document.createElement('input');
  count.name = COUNT_ID(damageId);
  count.id = count.name;
  count.type = 'number';
  count.step = '1';
  count.required = true;
  count.min = '1';
  count.value = damage?.count.toString() ?? '';
  countLabel.appendChild(count);

  // Damage - Bonus
  const bonusLabel = makeLabel('Bonus Dmg.');
  const bonus = document.createElement('input');
  bonus.name = BONUS_ID(damageId);
  bonus.id = bonus.name;
  bonus.type = 'number';
  bonus.step = '1';
  bonus.value = damage?.bonus?.toString() ?? '';
  bonusLabel.appendChild(bonus);

  // Damage - Type
  const typeLabel = makeLabel('Dmg. Type');
  const type = document.createElement('select');
  type.name = TYPE_ID(damageId);
  type.id = type.name;
  type.required = true;
  type.value = damage?.type ?? DAMAGE_TYPES[0];
  const typeOptions = DAMAGE_TYPES.map((dmg) => {
    const option = document.createElement('option');
    option.value = dmg;
    option.innerText = capitalize(dmg);
    option.selected = dmg === damage?.type;
    return option;
  });
  type.append(...typeOptions);
  typeLabel.appendChild(type);

  fieldSet.append(remove, legend, dieLabel, countLabel, bonusLabel, typeLabel);
  list.append(fieldSet);
  return list;
};

export const addWeapon = (weapon?: Weapon) => {
  const list = getElement(WEAPONS_ID());
  const index = list.children.length - 1;
  const fieldSet = document.createElement('fieldset');

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.innerHTML = '❌';
  remove.onclick = getOnRemove([
    (idx) => NAME_ID(WEAPONS_N_ID(idx)),
    (idx) => PROFICIENT_ID(WEAPONS_N_ID(idx)),
    (idx) => ABILITY_ID(WEAPONS_N_ID(idx)),
    (idx) => ADD_TO_HIT_ID(WEAPONS_N_ID(idx)),
    (idx) => NOTES_ID(WEAPONS_N_ID(idx)),
  ]);

  const legend = document.createElement('legend');
  legend.innerText = (index + 1).toString();

  // Name
  const nameLabel = makeLabel('Name');
  const name = document.createElement('input');
  name.name = NAME_ID(WEAPONS_N_ID(index));
  name.id = name.name;
  name.required = true;
  name.value = weapon?.name ?? '';
  nameLabel.appendChild(name);

  // Proficient
  const proficientLabel = makeLabel('Proficient');
  const proficient = document.createElement('input');
  proficient.name = PROFICIENT_ID(WEAPONS_N_ID(index));
  proficient.id = proficient.name;
  proficient.type = 'checkbox';
  proficient.checked = weapon?.proficient ?? false;
  proficientLabel.appendChild(proficient);

  // Ability
  const abilityLabel = makeLabel('Ability Modifier');
  const ability = document.createElement('select');
  ability.name = ABILITY_ID(WEAPONS_N_ID(index));
  ability.id = ability.name;
  ability.required = true;
  ability.value = weapon?.ability ?? ABILITIES[0];
  const abilityOptions = ABILITIES.map((ability) => {
    const option = document.createElement('option');
    option.value = ability;
    option.innerText = capitalize(ability);
    option.selected = ability === weapon?.ability;
    return option;
  });
  ability.append(...abilityOptions);
  abilityLabel.appendChild(ability);

  // Damage
  const damageSet = document.createElement('fieldset');
  damageSet.id = DAMAGE_ID(WEAPONS_N_ID(index));
  const damageLegend = document.createElement('legend');
  damageLegend.innerText = 'Damage';
  damageSet.append(damageLegend);

  // Add Damage
  const addDamageButton = document.createElement('button');
  addDamageButton.type = 'button';
  addDamageButton.className = 'add';
  addDamageButton.innerText = 'Add Damage';
  addDamageButton.onclick = () => {
    addDamage(index);
  };
  const addDamageDiv = document.createElement('div');
  addDamageDiv.append(addDamageButton);

  // Bonus to Hit
  const hitBonusLabel = makeLabel('Bonus to Hit');
  const hitBonus = document.createElement('input');
  hitBonus.name = ADD_TO_HIT_ID(WEAPONS_N_ID(index));
  hitBonus.id = hitBonus.name;
  hitBonus.type = 'number';
  hitBonus.step = '1';
  hitBonus.value = weapon?.additionalToHit.toString() ?? '';
  hitBonusLabel.appendChild(hitBonus);

  // Notes
  const notesLabel = makeLabel('Notes');
  const notes = document.createElement('textarea');
  notes.name = NOTES_ID(WEAPONS_N_ID(index));
  notes.id = notes.name;
  notes.value = weapon?.notes ?? '';
  notesLabel.appendChild(notes);

  fieldSet.append(
    remove,
    legend,
    nameLabel,
    proficientLabel,
    abilityLabel,
    damageSet,
    addDamageDiv,
    hitBonusLabel,
    notesLabel,
  );
  list.append(fieldSet);

  damageSet.append(damageLegend);
  weapon?.damage.forEach((damage) => {
    addDamage(index, damage);
  });
};
