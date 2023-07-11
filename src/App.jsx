import './App.css'
import { FooterSection } from './components/footer'
import { HomePage } from './components/home'
import { NavSection } from './components/nav'
import ReactGA from 'react-ga'
import { useEffect } from 'react'

const TRACKING_ID ="UA-277352337-1";
ReactGA.initialize(TRACKING_ID);


function App() {

  useEffect(() => {
    // non interactions
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

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
