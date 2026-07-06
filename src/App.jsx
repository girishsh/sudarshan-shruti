import './App.css'
import { useState, useEffect } from 'react'
import backgroundMusic from './mast_magan_musical.mp3'

// Falling Flower Component
function FallingFlower({ id }) {
  const flowerEmojis = ['🌸', '🌺', '🌼', '🌻', '💐']
  const randomFlower = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)]
  const randomLeft = Math.random() * 100
  const randomDelay = Math.random() * 3
  const randomDuration = 12 + Math.random() * 6 // 12-18 seconds for slower, smoother fall
  const randomSize = 24 + Math.random() * 16 // 24-40px

  return (
    <div
      className="falling-flower"
      style={{
        left: `${randomLeft}%`,
        '--animation-duration': `${randomDuration}s`,
        '--animation-delay': `${randomDelay}s`,
        fontSize: `${randomSize}px`,
      }}
    >
      {randomFlower}
    </div>
  )
}

// Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      // July 9, 2026, 12:28 PM IST
      const targetDate = new Date('2026-07-09T12:28:00+05:30').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="countdown-container">
      <div className="countdown-title">COUNTDOWN TO OUR WEDDING</div>
      <div className="countdown-timer">
        <div className="countdown-box">
          <div className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</div>
          <div className="countdown-label">DAYS</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-box">
          <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="countdown-label">HOURS</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-box">
          <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="countdown-label">MINUTES</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-box">
          <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="countdown-label">SECONDS</div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [isMuted, setIsMuted] = useState(false)
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    // Create initial flowers - reduced from 20 to 8
    setFlowers(Array.from({ length: 8 }, (_, i) => i))

    // Add new flowers continuously - increased interval for fewer flowers
    const flowerInterval = setInterval(() => {
      setFlowers(prev => [...prev, Math.random()])
    }, 2000) // Add a new flower every 2 seconds (was 800ms)

    return () => clearInterval(flowerInterval)
  }, [])

  useEffect(() => {
    // Add user interaction listener to trigger autoplay
    const playAudio = () => {
      const audio = document.getElementById('background-music')
      if (audio) {
        audio.volume = 0.3 // Set volume to 30%
        audio.muted = false // Ensure it's not muted
        
        const playPromise = audio.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Audio playing successfully')
              setIsMuted(false)
            })
            .catch(error => {
              console.log('Autoplay failed, trying again on user interaction')
              // Try again on next user interaction
            })
        }
      }
    }

    // Try to play immediately
    playAudio()

    // Also add event listeners for user interactions
    const events = ['click', 'touchstart', 'keydown']
    events.forEach(event => {
      document.addEventListener(event, playAudio, { once: true })
    })

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, playAudio)
      })
    }
  }, [])

  const handleLocationClick = () => {
    window.open(
      'https://maps.app.goo.gl/FwSGZPkv8LTSofo28?g_st=ac',
      '_blank'
    )
  }

  const toggleMute = () => {
    const audio = document.getElementById('background-music')
    if (audio) {
      if (isMuted) {
        audio.muted = false
        audio.play()
        setIsMuted(false)
      } else {
        audio.muted = true
        audio.pause()
        setIsMuted(true)
      }
    }
  }

  return (
    <div className="app-container">
      {/* Background Music - with autoplay, muted removed to allow playing */}
      <audio 
        id="background-music" 
        loop 
        preload="auto"
        playsInline
      >
        <source src={backgroundMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Control Button */}
      <button className="music-toggle" onClick={toggleMute} title={isMuted ? 'Unmute' : 'Mute'}>
        {isMuted ? '🔇' : '🔊'}
      </button>

      {/* Falling Flowers */}
      {flowers.map((flower, index) => (
        <FallingFlower key={`${flower}-${index}`} id={index} />
      ))}

      {/* Main Invitation Card */}
      <div className="invitation-wrapper">
        <div className="invitation-card">
          {/* Decorative Background Pattern */}
          <div className="pattern-top"></div>
          <div className="pattern-bottom"></div>

          {/* Main Content */}
          <div className="invitation-content">
            {/* Elephants Decoration */}
            <div className="elephants-decoration">
              <div className="elephant left">🐘</div>
              <div className="elephant-divider">✦</div>
              <div className="elephant right">🐘</div>
            </div>

            {/* Invitation Text */}
            <div className="invitation-text-section">
              <p className="you-are-invited">YOU ARE INVITED TO THE WEDDING OF</p>
            </div>

            {/* Couple Names */}
            <div className="couple-section">
              <h1 className="groom-name">SUDARSHAN</h1>
              <div className="ampersand">&</div>
              <h1 className="bride-name">SHRUTI</h1>
            </div>

            {/* Decorative Elements */}
            <div className="decorative-flourish">
              <span className="flourish-left">✦</span>
              <span className="flourish-center">✦</span>
              <span className="flourish-right">✦</span>
            </div>

            {/* Wedding Details */}
            <div className="wedding-details">
              <p className="on-text">ON</p>
              <p className="date">THURSDAY, 09 JULY 2026</p>
              <p className="time">AT 12:28 PM IST</p>
            </div>

            {/* Countdown Timer */}
            <CountdownTimer />

            {/* Venue Details */}
            <div className="venue-details">
              <p className="venue-label">VENUE</p>
              <p className="venue-name">Shri Ishwar Temple Kalyan Mantapa</p>
              <p className="venue-location">Gandhi Nagar, Dharwad</p>
            </div>

            {/* Map Button */}
            <button className="map-button" onClick={handleLocationClick}>
              📍 VIEW ON GOOGLE MAPS
            </button>

            {/* Blessing Line */}
            <div className="blessing-section">
              <p className="blessing-text">With the blessing of our parents</p>
              <p className="parents-names">Late Shri Chandravijay Shridhar Kalebere</p>
              <p className="parents-names">Smt. Mandakini Chandravijay Kalebere</p>
            </div>

            {/* Footer Message */}
            <div className="footer-message">
              <p>We request your presence and blessings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
