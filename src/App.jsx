import { useState } from 'react'

import { calculateHumanYears } from './utils/catAgeUtils'

import Navigation from './components/Navigation'
import Header from './components/Header'
import PreHeader from './components/PreHeader'
import CatAgeForm from './components/CatAgeForm'
import CatAgeResult from './components/CatAgeResult'
import Footer from './components/Footer'

export default function App() {
  const [result, setResult] = useState(null)
  const [lang, setLang] = useState('en') // Default language: Spanish

  const handleCalculate = (years, error = null) => {
    if (error) {
      setResult({ error })
      return
    }

    const humanYears = calculateHumanYears(years)
    setResult({ humanYears, years })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-indigo-100 text-slate-500 dark:bg-slate-900 dark:text-gray-200 p-6 sm:p-4">
      <PreHeader lang={lang} />
      <div className="w-full max-w-md rounded-2xl bg-white/90 p-8 shadow-xl backdrop-blur-md dark:bg-slate-800">
        <Navigation lang={lang} onChange={setLang} />
        <Header lang={lang} />
        <CatAgeForm onCalculate={handleCalculate} lang={lang} />
        <CatAgeResult result={result} lang={lang} />
      </div>
      <Footer lang={lang} />
    </div>
  )
}
