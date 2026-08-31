import { t } from '../i18n/translations'
import { Code, PenTool } from 'lucide-react'

export default function Footer({ lang }) {
  return (
    <footer className="mt-6 flex items-center justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-400">
      <Code className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />{' '}
      {t(lang, 'footer')}{' '}
      <a
        href="https://github.com/rolodoom/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 transition-colors duration-200 hover:text-indigo-300 dark:text-indigo-400 dark:hover:text-indigo-300"
      >
        RoLoDoOm
      </a>
      <PenTool className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
    </footer>
  )
}
