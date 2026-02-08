import LanguageSelect from './LanguageSelect'
import ThemeButton from './ThemeButton'

export default function Navigation({ lang, onChange }) {
  return (
    <div className="mb-6 flex justify-between">
      <LanguageSelect lang={lang} onChange={onChange} />
      <ThemeButton />
    </div>
  )
}
