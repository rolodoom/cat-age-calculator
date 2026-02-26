import { t } from '../i18n/translations'
import { Code, PenTool } from 'lucide-react'

export default function Footer({ lang }) {
  return (
    <footer className="mt-6 flex items-center justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-400">
      <Code className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />{' '}
      {t(lang, 'footer')}{' '}
      <PenTool className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
    </footer>
  )
}
