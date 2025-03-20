import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectList from './ProjectList'
import CookieConsent from 'react-cookie-consent';
import Fingerprint from './Fingerprint'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProjectList />
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Fingerprint />
    </>
  );
}

export default App
