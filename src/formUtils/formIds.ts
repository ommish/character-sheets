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
export function WEAPONS_N_DAMAGE_O_ID(n: number, o: number) {
  return `${WEAPONS_ID()}.${n}.damage.${o}` as const;
}

/** ******************************************************* */

export function NAME_ID(
  item: ReturnType<
    | typeof EQUIPMENT_N_ID
    | typeof FEATURES_N_ID
    | typeof PROFICIENCIES_N_ID
    | typeof SPELL_LIST_N_ID
    | typeof WEAPONS_N_ID
  >,
) {
  return `${item}.name`;
}
export function NOTES_ID(
  item: ReturnType<
    | typeof EQUIPMENT_N_ID
    | typeof PROFICIENCIES_N_ID
    | typeof SPELL_LIST_N_ID
    | typeof WEAPONS_N_ID
  >,
) {
  return `${item}.notes`;
}
export function DESCRIPTION_ID(item: ReturnType<typeof FEATURES_N_ID>) {
  return `${item}.description`;
}
export function TOTAL_USES_ID(item: ReturnType<typeof FEATURES_N_ID>) {
  return `${item}.uses.total`;
}
export function REMAINING_USES_ID(item: ReturnType<typeof FEATURES_N_ID>) {
  return `${item}.uses.remaining`;
}
export function PREPARED_ID(item: ReturnType<typeof SPELL_LIST_N_ID>) {
  return `${item}.prepared`;
}
export function PROFICIENT_ID(item: ReturnType<typeof WEAPONS_N_ID>) {
  return `${item}.proficient`;
}
export function ABILITY_ID(item: ReturnType<typeof WEAPONS_N_ID>) {
  return `${item}.ability`;
}
export function DAMAGE_ID(item: ReturnType<typeof WEAPONS_N_ID>) {
  return `${item}.damage`;
}
export function DIE_ID(item: ReturnType<typeof WEAPONS_N_DAMAGE_O_ID>) {
  return `${item}.die`;
}
export function COUNT_ID(item: ReturnType<typeof WEAPONS_N_DAMAGE_O_ID>) {
  return `${item}.count`;
}
export function TYPE_ID(item: ReturnType<typeof WEAPONS_N_DAMAGE_O_ID>) {
  return `${item}.type`;
}
export function ADD_TO_DMG_ID(item: ReturnType<typeof WEAPONS_N_ID>) {
  return `${item}.additionalDamage`;
}
export function ADD_TO_HIT_ID(item: ReturnType<typeof WEAPONS_N_ID>) {
  return `${item}.additionalToHit`;
}
