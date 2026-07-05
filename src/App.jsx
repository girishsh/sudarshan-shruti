import './App.css'

export default function App() {
  const handleLocationClick = () => {
    window.open(
      'https://www.google.com/maps/search/Shri+Ishwar+Temple+Kalyan+Mantapa+Gandhi+Nagar+Dharwad',
      '_blank'
    )
  }

  return (
    <div className="invitation-container">
      {/* Left Section - Calendar & Ganesha */}
      <div className="left-section">
        <div className="om-symbol">ॐ</div>
        <div className="ganesha-text">|| श्रीगणेशाय नमः ||</div>
        
        <div className="ganesha-icon">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <text x="50" y="70" fontSize="80" textAnchor="middle" fill="#8B4789">
              ॐ
            </text>
          </svg>
        </div>

        <div className="month-year">July 2026</div>
        <div className="calendar">
          <div className="calendar-header">
            <span>Su</span>
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
          </div>
          <div className="calendar-dates">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((date) => (
              <div key={date} className={date === 9 ? 'date highlight' : 'date'}>
                {date}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center Section - Main Invitation */}
      <div className="center-section">
        <div className="blessing-line">With Blessing of</div>
        
        <div className="ancestor-names">
          <p className="ancestor">Late Shri Chandravijay Shridhar Kalebere</p>
          <p className="ancestor">Smt. Mandakini Chandravijay Kalebere</p>
        </div>

        <div className="invitation-text">
          <p>Request the honour of your presence</p>
          <p>to join the marriage celebration</p>
          <p>of our son</p>
        </div>

        <div className="couple-names">
          <h1 className="groom">Sudarshan</h1>
          <p className="with">with</p>
          <h1 className="bride">Shruti</h1>
        </div>

        <div className="parents-line">
          <p>(D/o. Smt. Jayadevi & Shri Rajashekar Sunkad)</p>
        </div>

        <div className="event-details">
          <div className="date-box">
            <span className="day">THURSDAY</span>
            <span className="date-number">09</span>
            <span className="month">JULY 2026</span>
          </div>
          <div className="time">AT 12:28 PM</div>
        </div>

        <div className="venue-section">
          <h2>Venue</h2>
          <div className="venue-address">
            <p>Shri Ishwar Temple Kalyan Mantapa</p>
            <p>Gandhi Nagar, Dharwad</p>
          </div>
          <button className="map-button" onClick={handleLocationClick}>
            📍 View on Google Maps
          </button>
        </div>

        <div className="footer-text">
          <p>We request your presence with pleasure</p>
        </div>
      </div>

      {/* Right Section - Quote */}
      <div className="right-section">
        <div className="quote-box">
          <p className="quote-highlight">09TH JULY</p>
          <p className="quote-highlight">IS GOING TO BE</p>
          <p className="quote-text">Best</p>
          <p className="quote-text">day</p>
          <p className="quote-text">Ever</p>
          <div className="quote-divider"></div>
          <p className="quote-message">IN OUR LIVES</p>
          <p className="quote-message">WE REQUEST YOUR</p>
          <p className="quote-message">PRESENCE</p>
          <p className="quote-message">WITH PLEASURE</p>
        </div>
        <div className="floral-accent">✿</div>
      </div>
    </div>
  )
}
