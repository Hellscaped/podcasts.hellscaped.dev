import { useState } from 'react'
import './App.css'

function App() {
  const [coins, setCoins] = useState(0)

  return (
    <>
      <video id="thefireislooping" controls autoPlay loop="true">
        <source src="/the_fire_is_looping_V1.mp4" type="video/mp4" />
      </video>
      <div className="podcast vcr">
        <h1>GREED PODCAST</h1>
        <h2>made for my ELA class</h2>
        <div className="card">
          <h2>4-1: SLAVES TO POWER</h2>
          <h3>GREED /// FIRST</h3>
          <audio controls>
            <source src="/greed_first.m4a" type="audio/mp4" />
          </audio>
          <button id='coin' onClick={() => setCoins(coins + 1)}>
            {coins}
          </button>
          <p>
            Tracks used: <a href="https://heavenpierceher.bandcamp.com/track/the-fire-is-gone-for-piano-saxophone-and-trumpet">The Fire is Gone by Hakita</a><br></br>
            Video footage is from ULTRAKILL.<br></br>
            Coin texture is also from ULTRAKILL.        
          </p>
        </div>
      </div>
    </>
  )
}

export default App
