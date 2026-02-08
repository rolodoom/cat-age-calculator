import { Earth } from 'lucide-react'
import { translations } from '../i18n/translations'

export default function LanguageSelect({ lang, onChange }) {
  return (
    <div className="inline-flex items-center gap-1">
      <Earth />
      <select
        value={lang}
        onChange={(e) => onChange(e.target.value)}
        className="cursor-pointer rounded-sm bg-slate-100 p-2 dark:bg-slate-700"
      >
        {Object.entries(translations).map(([code, data]) => (
          <option key={code} value={code}>
            {data.languageName}
          </option>
        ))}
      </select>
    </div>
  )
}
