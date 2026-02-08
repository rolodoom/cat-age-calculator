import { Leaf, Calculator } from 'lucide-react'

import { t } from '../i18n/translations'
import { getLifeStageLabel, getLifeStageKey } from '../utils/catAgeUtils'

export default function CatAgeResult({ result, lang }) {
  if (!result) return null

  if (result.error) {
    return (
      <div className="mt-6 text-center text-lg text-red-500 italic dark:text-red-400">
        {result.error}
      </div>
    )
  }

  const { humanYears, years } = result

  const stage = getLifeStageLabel(years, lang)
  const stageKey = getLifeStageKey(years)

  const rightArrow = '\u2192' // Right arrow

  const stageStyles = {
    kitten: {
      container: 'bg-rose-100 dark:border-rose-300',
      text: 'dark:text-rose-300',
    },
    young: {
      container: 'bg-amber-100 dark:border-amber-400',
      text: 'dark:text-amber-400',
    },
    adult: {
      container: 'bg-emerald-100 dark:border-emerald-400',
      text: 'dark:text-emerald-400',
    },
    middleAged: {
      container: 'bg-blue-100 dark:border-blue-400',
      text: 'dark:text-blue-400',
    },
    senior: {
      container: 'bg-violet-100 dark:border-violet-400',
      text: 'dark:text-violet-400',
    },
  }

  return (
    <div
      className={`mt-6 rounded-2xl p-6 text-center ${stageStyles[stageKey].container} border border-white shadow-inner dark:bg-slate-800`}
    >
      <p className="text-xl text-gray-600 dark:text-gray-200">
        <Calculator className="mb-1 inline-block" /> {t(lang, 'resultPrefix')}{' '}
        <span className={`text-slate-800 ${stageStyles[stageKey].text}`}>
          {humanYears}
        </span>{' '}
        {t(lang, 'resultSuffix')}
      </p>
      <p className="mt-1 text-lg text-gray-500 dark:text-gray-300">
        <Leaf className="inline-block" /> {t(lang, 'stagePrefix')}
        {` ${rightArrow} `}
        <span className={`text-slate-800 ${stageStyles[stageKey].text}`}>
          {stage}
        </span>
      </p>
    </div>
  )
}
