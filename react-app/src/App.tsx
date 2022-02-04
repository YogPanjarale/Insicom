import { useState } from 'react'
import logo from './assets/logo.svg'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
      <div className={styles.logoWrapper}>
      <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <footer>
        <p className={styles.footer}>Insicom</p>
      </footer>
    </div>
  )
}

export default App
