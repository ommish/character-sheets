import { merge } from 'lodash';
import {
  ABILITIES,
  Abilities,
  Ability,
  Character,
  DigestedCharacter,
  PROFIENCY_BONUSES,
  SaveBlock,
  Skill,
  SkillBlock,
} from '../types';

const BASE_SAVES: Record<Ability, SaveBlock> = {
  str: {
    additionalBonus: 0,
    notes: '',
    proficient: false,
  },
  dex: {
    additionalBonus: 0,
    notes: '',
    proficient: false,
  },
  con: {
    additionalBonus: 0,
    notes: '',
    proficient: false,
  },
  int: {
    additionalBonus: 0,
    notes: '',
    proficient: false,
  },
  wis: {
    additionalBonus: 0,
    notes: '',
    proficient: false,
  },
  cha: {
    additionalBonus: 0,
    notes: '',
    proficient: false,
  },
};
const BASE_SKILLS: Record<Skill, SkillBlock> = {
  acrobatics: {
    proficient: false,
    ability: 'dex',
    additionalBonus: 0,
    notes: '',
  },
  animalHandling: {
    proficient: false,
    ability: 'wis',
    additionalBonus: 0,
    notes: '',
  },
  arcana: {
    proficient: false,
    ability: 'int',
    additionalBonus: 0,
    notes: '',
  },
  athletics: {
    proficient: false,
    ability: 'str',
    additionalBonus: 0,
    notes: '',
  },
  deception: {
    proficient: false,
    ability: 'cha',
    additionalBonus: 0,
    notes: '',
  },
  history: {
    proficient: false,
    ability: 'int',
    additionalBonus: 0,
    notes: '',
  },
  insight: {
    proficient: false,
    ability: 'wis',
    additionalBonus: 0,
    notes: '',
  },
  intimidation: {
    proficient: false,
    ability: 'cha',
    additionalBonus: 0,
    notes: '',
  },
  investigation: {
    proficient: false,
    ability: 'int',
    additionalBonus: 0,
    notes: '',
  },
  medicine: {
    proficient: false,
    ability: 'wis',
    additionalBonus: 0,
    notes: '',
  },
  nature: {
    proficient: false,
    ability: 'int',
    additionalBonus: 0,
    notes: '',
  },
  perception: {
    proficient: false,
    ability: 'wis',
    additionalBonus: 0,
    notes: '',
  },
  performance: {
    proficient: false,
    ability: 'cha',
    additionalBonus: 0,
    notes: '',
  },
  persuasion: {
    proficient: false,
    ability: 'cha',
    additionalBonus: 0,
    notes: '',
  },
  religion: {
    proficient: false,
    ability: 'int',
    additionalBonus: 0,
    notes: '',
  },
  sleightOfHand: {
    proficient: false,
    ability: 'dex',
    additionalBonus: 0,
    notes: '',
  },
  stealth: {
    proficient: false,
    ability: 'dex',
    additionalBonus: 0,
    notes: '',
  },
  survival: {
    proficient: false,
    ability: 'wis',
    additionalBonus: 0,
    notes: '',
  },
};

function getModifiers(abilities: Abilities): Record<Ability, number> {
  return ABILITIES.reduce<Record<Ability, number>>(
    (acc, ab) => ({ ...acc, [ab]: Math.floor((abilities[ab] - 10) / 2) }),
    abilities,
  );
}

export function digest(character: Character): DigestedCharacter {
  const modifiers = getModifiers(character.abilityScores);
  const saves = merge({}, BASE_SAVES, character.saves);
  const skills = merge({}, BASE_SKILLS, character.skills);
  return {
    campaign: character.campaign,
    name: character.name,
    level: character.level,
    race: character.race,
    inspiration: character.inspiration,
    klass: character.klass,
    subKlass: character.subKlass,
    background: character.background,
    abilityScores: character.abilityScores,
    modifiers,
    proficiencyBonus: PROFIENCY_BONUSES[character.level],
    saves,
    skills,
    armorClass: character.armorClass,
    initiative: character.initiative,
    speed: character.speed,
    health: character.health,
    hitDie: character.hitDie,
    deathSaves: character.deathSaves,
    features: character.features,
    statusEffects: character.statusEffects,
    proficiencies: character.proficiencies,
    weapons: character.weapons,
    money: character.money,
    equipment: character.equipment,
    showSpells: character.showSpells,
    spells: character.spells,
    spellSaveDC:
      8 + modifiers[character.dc.ability] + PROFIENCY_BONUSES[character.level],
    spellAttackBonus:
      modifiers[character.dc.ability] + PROFIENCY_BONUSES[character.level],
    pattern: character.pattern,
  };
}
