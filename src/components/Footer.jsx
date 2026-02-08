import { t } from '../i18n/translations'
import { PawPrint, Heart } from 'lucide-react'

export default function Footer({ lang }) {
  return (
    <footer className="mt-6 flex items-center justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-400">
      <PawPrint className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />{' '}
      {t(lang, 'footer')}{' '}
      <Heart className="h-4 w-4 text-red-400 dark:text-red-600" />
    </footer>
  )
}
