import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-banner">
        <div className="banner-overlay">
          <h1>Welcome to Geografica</h1>

          <p>
            Compare flights, hotels, visas and travel
            packages from a single platform.
          </p>
        </div>
      </section>

      <section className="feature-grid">
        <Link href="/flights" className="feature-card">
          ✈
          <h3>Flights</h3>
          <p>
            Search and compare flight fares from
            multiple providers.
          </p>
        </Link>

        <Link href="/hotels" className="feature-card">
          🏨
          <h3>Hotels</h3>
          <p>
            Discover premium stays and luxury resorts
            worldwide.
          </p>
        </Link>

        <Link href="/packages" className="feature-card">
          🌍
          <h3>Packages</h3>
          <p>
            Explore curated holiday experiences and
            travel deals.
          </p>
        </Link>

        <Link href="/visas" className="feature-card">
          🛂
          <h3>Visas</h3>
          <p>
            Simplified visa assistance for international
            travelers.
          </p>
        </Link>
      </section>

      <section className="popular-destinations">
        <h2>Popular Destinations</h2>

        <div className="destination-grid">
          <div className="destination-card">
            Dubai
          </div>

          <div className="destination-card">
            Turkey
          </div>

          <div className="destination-card">
            Singapore
          </div>

          <div className="destination-card">
            London
          </div>
        </div>
      </section>

      <footer className="home-footer">
        Geografica Travel Platform
      </footer>
    </main>
  );
}