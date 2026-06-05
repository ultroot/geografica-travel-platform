import "./packages.css";

export default function PackagesPage() {
  return (
    <main className="packages-page">
      <section className="packages-banner">
        <div className="banner-overlay">
          <h1>Find Amazing Tour Packages</h1>
          <p>
            Discover curated holiday experiences around
            the world.
          </p>
        </div>
      </section>

      <section className="package-search-card">
        <div className="package-form-grid">
          <input
            type="text"
            placeholder="Destination"
          />

          <input
            type="date"
          />

          <select>
            <option>3 Days</option>
            <option>5 Days</option>
            <option>7 Days</option>
            <option>10 Days</option>
          </select>

          <select>
            <option>1 Traveler</option>
            <option>2 Travelers</option>
            <option>3 Travelers</option>
            <option>4 Travelers</option>
          </select>
        </div>

        <button className="package-search-btn">
          Search Packages
        </button>
      </section>

      <section className="coming-soon-card">
        <h2>🌍 Package Booking Module</h2>

        <p>
          Tour package integration is currently under
          development and will be available soon.
        </p>
      </section>

      <section className="popular-destinations">
        <h2>Popular Packages</h2>

        <div className="destination-grid">
          <div className="destination-card">
            Dubai
          </div>

          <div className="destination-card">
            Turkey
          </div>

          <div className="destination-card">
            Thailand
          </div>

          <div className="destination-card">
            Kashmir
          </div>
        </div>
      </section>
    </main>
  );
}