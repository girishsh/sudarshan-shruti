import './App.css'
import { useState, useEffect } from 'react'

export default function App() {
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    // Try to autoplay music
    const audio = document.getElementById('background-music')
    if (audio) {
      audio.volume = 0.3 // Set volume to 30%
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Autoplay prevented. User must interact first.')
          setIsMuted(true)
        })
      }
    }
  }, [])

  const handleLocationClick = () => {
    window.open(
      'https://www.google.com/maps/search/Shri+Ishwar+Temple+Kalyan+Mantapa+Gandhi+Nagar+Dharwad',
      '_blank'
    )
  }

  const toggleMute = () => {
    const audio = document.getElementById('background-music')
    if (audio) {
      if (isMuted) {
        audio.play()
        setIsMuted(false)
      } else {
        audio.pause()
        setIsMuted(true)
      }
    }
  }

  return (
    <div className="app-container">
      {/* Background Music */}
      <audio id="background-music" loop>
        <source src="/src/mast_magan_musical.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Control Button */}
      <button className="music-toggle" onClick={toggleMute} title={isMuted ? 'Unmute' : 'Mute'}>
        {isMuted ? '🔇' : '🔊'}
      </button>

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
              <p className="time">AT 12:28 PM</p>
            </div>

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
              <p className="blessing-text">With the blessing of our ancestors</p>
              <p className="parents-names">Late Shri Chandravijay Shridhar Kalebere</p>
              <p className="parents-names">Smt. Mandakini Chandravijay Kalebere</p>
            </div>

            {/* Footer Message */}
            <div className="footer-message">
              <p>We request your presence and blessings</p>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="photo-gallery-section">
          <div className="gallery-header-text">
            <h2>Our Love Story</h2>
            <p>Moments filled with joy and love</p>
          </div>

          <div className="photo-gallery">
            <div className="photo-item photo-1">
              <div className="photo-placeholder">
                <span className="photo-icon">📸</span>
                <p>Pre-Wedding Shoot</p>
              </div>
            </div>
            <div className="photo-item photo-2">
              <div className="photo-placeholder">
                <span className="photo-icon">💑</span>
                <p>Together</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="floating-decoration floating-1">✿</div>
      <div className="floating-decoration floating-2">✿</div>
      <div className="floating-decoration floating-3">✿</div>
    </div>
  )
}
