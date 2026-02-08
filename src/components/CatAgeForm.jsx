import { useState } from 'react'
import { Calculator } from 'lucide-react'

import { t } from '../i18n/translations'

export default function CatAgeForm({ onCalculate, lang }) {
  const [catYears, setCatYears] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const years = parseFloat(catYears)
    if (isNaN(years) || years < 0) {
      onCalculate(null, t(lang, 'error'))
      return
    }
    onCalculate(years)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-center text-lg">{t(lang, 'label')}</label>
      <input
        type="number"
        step="0.1"
        value={catYears}
        onChange={(e) => setCatYears(e.target.value)}
        placeholder={t(lang, 'placeholder')}
        className="w-full rounded-lg border border-slate-300 p-2 text-center focus:ring-2 focus:ring-indigo-400 dark:border-slate-600"
      />
      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-indigo-600 py-3 font-medium text-white transition hover:bg-indigo-700"
      >
        {t(lang, 'button')} <Calculator className="text-white/70" />
      </button>
    </form>
  )
}
