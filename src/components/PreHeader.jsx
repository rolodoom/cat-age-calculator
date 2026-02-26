import { t } from '../i18n/translations'
import { PawPrint, Heart } from 'lucide-react'

export default function PreHeader({ lang }) {
  return (
    <div className="mx-auto mb-4 flex w-full max-w-md items-center justify-center gap-2 text-sm text-gray-500 italic dark:text-gray-400">
      <span>{t(lang, 'inspiration')}</span>
      <span className="flex items-center gap-0.5">
        <Heart className="h-4 w-4 text-red-400 dark:text-red-600" /> Valentina
      </span>{' '}
      &
      <span className="flex items-center gap-0.5">
        <PawPrint className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
        Musguruza
      </span>
    </div>
  )
}
