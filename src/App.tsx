import { SettingsProvider } from './contexts'
import { Router } from './router'
import './styles/main.css'

export function App() {
  return (
    <SettingsProvider>
      <Router />
    </SettingsProvider>
  )
}
