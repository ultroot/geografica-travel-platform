import "./hotels.css";

export default function HotelsPage() {
  return (
    <main className="hotels-page">
      <section className="hotels-banner">
        <div className="banner-overlay">
          <h1>Find Your Perfect Stay</h1>
          <p>Premium hotel comparison for travelers</p>
        </div>
      </section>

      <section className="hotel-search-card">
        <div className="hotel-form-grid">
          <input
            type="text"
            placeholder="Destination"
          />

          <input
            type="date"
          />

          <input
            type="date"
          />

          <select>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>
        </div>

        <button className="hotel-search-btn">
          Search Hotels
        </button>
      </section>

      <section className="coming-soon-card">
        <h2>🏨 Hotel Booking Module</h2>

        <p>
          Hotel search integration is currently
          under development and will be available soon.
        </p>
      </section>

      <section className="popular-destinations">
        <h2>Popular Destinations</h2>

        <div className="destination-grid">
          <div className="destination-card">
            Dubai
          </div>

          <div className="destination-card">
            Istanbul
          </div>

          <div className="destination-card">
            London
          </div>

          <div className="destination-card">
            Singapore
          </div>
        </div>
      </section>
    </main>
  );
}