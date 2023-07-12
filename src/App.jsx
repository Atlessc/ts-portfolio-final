import './App.css'
import { FooterSection } from './components/footer'
import { HomePage } from './components/home'
import { NavSection } from './components/nav'

function App() {

  return (
      <div className='App'>
        <div className='Container'>
          <NavSection />
          <HomePage />
          <FooterSection />
        </div>
      </div>
  )
}

export default App
