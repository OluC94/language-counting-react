import { useState } from 'react'
import './App.css'
import LanguagePractice from './LanguagePractice'

function App() {

  return (
    <>
      <div className='title'>
        <h2>Language counting</h2>
      </div>
      <div className="card">
        <button onClick={() => {}}>
          count is gone
        </button>
        <LanguagePractice/>
      </div>

    </>
  )
}

export default App
