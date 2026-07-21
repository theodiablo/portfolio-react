import { LangProvider } from './i18n/LangContext'
import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { Leadership } from './sections/Leadership'
import { RunningCoach } from './sections/RunningCoach'
import { Experience } from './sections/Experience'
import { HowIWorkWithAI } from './sections/HowIWorkWithAI'
import { EarlierWork } from './sections/EarlierWork'
import { AboutContact } from './sections/AboutContact'

export default function App() {
  return (
    <LangProvider>
      <Header />
      <main>
        <Hero />
        <Leadership />
        <Experience />
        <RunningCoach />
        <HowIWorkWithAI />
        <EarlierWork />
        <AboutContact />
      </main>
    </LangProvider>
  )
}
