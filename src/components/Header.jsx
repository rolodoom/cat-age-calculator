import { t } from '../i18n/translations'
import { PawPrint } from 'lucide-react'

export default function Header({ lang }) {
  return (
    <header className="mb-6 text-center">
      <h1 className="flex items-center justify-center gap-2 text-2xl font-semibold text-indigo-600 dark:text-white">
        <PawPrint /> {t(lang, 'title')}
      </h1>
      <p className="mt-1">{t(lang, 'subtitle')}</p>
    </header>
  )
}
