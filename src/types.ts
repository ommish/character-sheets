export const DICE = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100'] as const;
export type Die = (typeof DICE)[number];

export const PROFIENCY_BONUSES: Record<number, number> = {
  1: 2,
  2: 2,
  3: 2,
  4: 2,
  5: 3,
  6: 3,
  7: 3,
  8: 3,
  9: 4,
  10: 4,
  11: 4,
  12: 4,
  13: 5,
  14: 5,
  15: 5,
  16: 5,
  17: 6,
  18: 6,
  19: 6,
  20: 6,
} as const;

export const ABILITIES = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;
export type Ability = (typeof ABILITIES)[number];
export type Abilities = Record<Ability, number>;

export const SKILLS = [
  'acrobatics',
  'animalHandling',
  'arcana',
  'athletics',
  'deception',
  'history',
  'insight',
  'intimidation',
  'investigation',
  'medicine',
  'nature',
  'perception',
  'performance',
  'persuasion',
  'religion',
  'sleightOfHand',
  'stealth',
  'survival',
] as const;
export type Skill = (typeof SKILLS)[number];
export interface SkillBlock {
  proficient: boolean;
  ability: Ability;
  additionalBonus: number;
  notes: string;
}
export type Skills = Record<Skill, SkillBlock>;

export interface SaveBlock {
  proficient: boolean;
  additionalBonus: number;
  notes: string;
}
export type Saves = Record<Ability, SaveBlock>;

export type ArmorType = 'heavy' | 'medium' | 'light';

export interface Initiative {
  additionalBonus: number | null;
  notes?: string;
}

export interface Proficiency {
  name: string;
  notes?: string;
}
export const PROFICIENCIES = [
  'weapons',
  'armor',
  'languages',
  'tools',
] as const;
export type ProficiencyCategory = (typeof PROFICIENCIES)[number];
export type Proficiencies = Record<ProficiencyCategory, Proficiency[]>;

export const DAMAGE_TYPES = [
  'prcg',
  'bldg',
  'slsh',
  'pois',
  'acid',
  'fire',
  'cold',
  'radi',
  'necr',
  'lgtg',
  'thnd',
  'forc',
  'psyc',
] as const;
export type DamageType = (typeof DAMAGE_TYPES)[number];

export interface WeaponDamage {
  die: Die;
  count: number;
  type: DamageType;
}
export interface Weapon {
  name: string;
  proficient: boolean;
  ability: Ability;
  damage: WeaponDamage[];
  additionalDamage: number;
  additionalToHit: number;
  notes?: string;
}

export interface Item {
  name: string;
  notes?: string;
  link?: string;
}

export const CURRENCIES = ['copper', 'silver', 'gold', 'platinum'] as const;
export type Money = Record<(typeof CURRENCIES)[number], number | null>;

export interface Feature {
  name: string;
  description: string;
  uses: null | {
    total: number;
    remaining: number;
  };
}

export interface Health {
  max: number;
  current?: number;
  temp?: number | null;
  dice?: number | null;
}

export interface DeathSaves {
  successes: number;
  failures: number;
}

export interface ArmorClass {
  ac: number;
  notes?: string;
}

export interface Speed {
  feet: number;
  notes?: string;
}

export const STATUS_EFFECTS = [
  'Blinded',
  'Charmed',
  'Deafened',
  'Frightened',
  'Grappled',
  'Incapacitated',
  'Invisible',
  'Paralyzed',
  'Petrified',
  'Poisoned',
  'Prone',
  'Restrained',
  'Stunned',
  'Unconscious',
  'Exhaustion',
] as const;
export type StatusEffect = (typeof STATUS_EFFECTS)[number];

export interface DC {
  ability: Ability;
}

export interface Spell {
  name: string;
  notes: string;
  prepared?: boolean;
}

export const SPELL_LEVELS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export type SpellLevel = `${(typeof SPELL_LEVELS)[number]}`;
export type Spells = Partial<
  Record<
    SpellLevel,
    {
      total: null | number;
      remaining: null | number;
      spells: Spell[];
    }
  >
>;

export interface Character {
  campaign: string;
  name: string;
  level: number;
  race: string;
  klass: string;
  subKlass: string;
  inspiration: boolean;
  background: string;
  abilityScores: Abilities;
  skills: Partial<Record<Skill, Partial<Omit<SkillBlock, 'ability'>>>>;
  saves: Partial<Record<Ability, Partial<SaveBlock>>>;
  armorClass: ArmorClass;
  health: Health;
  hitDie: Die;
  statusEffects: StatusEffect[];
  proficiencies: Proficiencies;
  weapons: Weapon[];
  features: Feature[];
  deathSaves: DeathSaves;
  money: Money;
  initiative: Initiative;
  equipment: Item[];
  speed: Speed;
  showSpells: boolean;
  dc: DC;
  spells: Spells;
  pattern?: string;
}

export interface DigestedCharacter {
  name: string;
  campaign: string;
  level: number;
  race: string;
  klass: string;
  subKlass: string;
  inspiration: boolean;
  background: string;
  abilityScores: Abilities;
  modifiers: Record<Ability, number>;
  proficiencyBonus: number;
  saves: Record<Ability, SaveBlock>;
  skills: Record<Skill, SkillBlock>;
  armorClass: ArmorClass;
  initiative: Initiative;
  speed: Speed;
  hitDie: Die;
  health: Health;
  deathSaves: DeathSaves;
  features: Feature[];
  statusEffects: StatusEffect[];
  proficiencies: Proficiencies;
  weapons: Weapon[];
  money: Money;
  equipment: Item[];
  showSpells: boolean;
  spells: Spells;
  spellSaveDC: number;
  spellAttackBonus: number;
  pattern?: string;
}
