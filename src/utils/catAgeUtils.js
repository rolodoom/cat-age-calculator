import { t } from '../i18n/translations'

// Pure logic module — easy to test and reuse

export const calculateHumanYears = (years) => {
  if (years <= 0) return 0
  if (years === 1) return 15
  if (years === 2) return 24
  return 24 + (years - 2) * 4
}

export const getLifeStageLabel = (years, lang) => {
  return t(lang, getLifeStageKey(years))
}

export const getLifeStageKey = (years) => {
  if (years < 0.5) return 'kitten'
  if (years < 2) return 'young'
  if (years < 7) return 'adult'
  if (years < 11) return 'middleAged'
  return 'senior'
}
