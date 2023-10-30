import { ProficiencyCategory } from '../types';

export function EQUIPMENT_ID() {
  return 'equipment' as const;
}
export function FEATURES_ID() {
  return 'features' as const;
}
export function PROFICIENCIES_ID(proficiency: ProficiencyCategory) {
  return `proficiencies.${proficiency}` as const;
}
export function SPELL_LIST_ID(level: string) {
  return `spells.${level}.spells` as const;
}
export function WEAPONS_ID() {
  return 'weapons' as const;
}

/** ******************************************************* */

export function EQUIPMENT_N_ID(n: number) {
  return `${EQUIPMENT_ID()}.${n}` as const;
}
export function FEATURES_N_ID(n: number) {
  return `${FEATURES_ID()}.${n}` as const;
}
export function PROFICIENCIES_N_ID(category: ProficiencyCategory, n: number) {
  return `${PROFICIENCIES_ID(category)}.${n}` as const;
}
export function SPELL_LIST_N_ID(level: string, n: number) {
  return `${SPELL_LIST_ID(level)}.${n}` as const;
}
export function WEAPONS_N_ID(n: number) {
  return `${WEAPONS_ID()}.${n}` as const;
}

/** ******************************************************* */

export function ITEM_N_NAME_ID(
  itemN: ReturnType<
    | typeof EQUIPMENT_N_ID
    | typeof FEATURES_N_ID
    | typeof PROFICIENCIES_N_ID
    | typeof SPELL_LIST_N_ID
    | typeof WEAPONS_N_ID
  >,
) {
  return `${itemN}.name`;
}
export function ITEM_N_NOTES_ID(
  itemN: ReturnType<
    | typeof EQUIPMENT_N_ID
    | typeof PROFICIENCIES_N_ID
    | typeof SPELL_LIST_N_ID
    | typeof WEAPONS_N_ID
  >,
) {
  return `${itemN}.notes`;
}
export function ITEM_N_DESCRIPTION_ID(itemN: ReturnType<typeof FEATURES_N_ID>) {
  return `${itemN}.description`;
}
export function ITEM_N_PREPARED_ID(itemN: ReturnType<typeof SPELL_LIST_N_ID>) {
  return `${itemN}.prepared`;
}
export function ITEM_N_PROFICIENT_ID(itemN: ReturnType<typeof WEAPONS_N_ID>) {
  return `${itemN}.proficient`;
}
export function ITEM_N_ABILITY_ID(itemN: ReturnType<typeof WEAPONS_N_ID>) {
  return `${itemN}.ability`;
}
export function ITEM_N_DAMAGE_DIE_ID(itemN: ReturnType<typeof WEAPONS_N_ID>) {
  return `${itemN}.damage.die`;
}
export function ITEM_N_DAMAGE_COUNT_ID(itemN: ReturnType<typeof WEAPONS_N_ID>) {
  return `${itemN}.damage.count`;
}
export function ITEM_N_DAMAGE_TYPE_ID(itemN: ReturnType<typeof WEAPONS_N_ID>) {
  return `${itemN}.damage.type`;
}
export function ITEM_N_ADD_TO_HIT_ID(itemN: ReturnType<typeof WEAPONS_N_ID>) {
  return `${itemN}.additionalToHit`;
}
export function ITEM_N_ADD_TO_DAMAGE_ID(
  itemN: ReturnType<typeof WEAPONS_N_ID>,
) {
  return `${itemN}.additionalDamage`;
}
