import './App.css'
import { useState } from 'react'

export default function App() {
  const [activeTab, setActiveTab] = useState('invitation')

  const handleLocationClick = () => {
    window.open(
      'https://www.google.com/maps/search/Shri+Ishwar+Temple+Kalyan+Mantapa+Gandhi+Nagar+Dharwad',
      '_blank'
    )
  }

  const galleryImages = [
    {
      id: 1,
      title: 'Pre-Wedding Moments',
      placeholder: '📸'
    },
    {
      id: 2,
      title: 'Love Story',
      placeholder: '💑'
    },
    {
      id: 3,
      title: 'Special Moments',
      placeholder: '✨'
    },
    {
      id: 4,
      title: 'Together',
      placeholder: '💕'
    }
  ]

  return (
    <div className="app-container">
      {/* Navigation Tabs */}
      <div className="nav-tabs">
        <button 
          className={`tab-btn ${activeTab === 'invitation' ? 'active' : ''}`}
          onClick={() => setActiveTab('invitation')}
        >
          Invitation
        </button>
        <button 
          className={`tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
          onClick={() => setActiveTab('gallery')}
        >
          Our Moments
        </button>
      </div>

      {/* Invitation Section */}
      {activeTab === 'invitation' && (
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
        </div>
      )}

      {/* Gallery Section */}
      {activeTab === 'gallery' && (
        <div className="gallery-wrapper">
          <div className="gallery-header">
            <h2>Our Pre-Wedding Moments</h2>
            <p>A journey of love and joy</p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className="gallery-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="gallery-image-placeholder">
                  <span className="emoji-placeholder">{image.placeholder}</span>
                </div>
                <p className="gallery-title">{image.title}</p>
                <p className="gallery-subtitle">Add your beautiful moments here</p>
              </div>
            ))}
          </div>

          <div className="gallery-note">
            <p>📸 Upload your pre-wedding shoot photos here</p>
            <p>Click on each section to add images</p>
          </div>
        </div>
      )}

      {/* Floating Decorative Elements */}
      <div className="floating-decoration floating-1">✿</div>
      <div className="floating-decoration floating-2">✿</div>
      <div className="floating-decoration floating-3">✿</div>
    </div>
  )
}
