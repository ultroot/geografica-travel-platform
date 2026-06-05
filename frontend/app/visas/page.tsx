import "./visas.css";

export default function VisasPage() {
  return (
    <main className="visas-page">
      <section className="visas-banner">
        <div className="banner-overlay">
          <h1>Visa Services Worldwide</h1>

          <p>
            Fast, reliable and hassle-free visa assistance
            for your international travel plans.
          </p>
        </div>
      </section>

      <section className="visa-search-card">
        <div className="visa-form-grid">
          <input
            type="text"
            placeholder="Destination Country"
          />

          <select>
            <option>Tourist Visa</option>
            <option>Business Visa</option>
            <option>Work Visa</option>
            <option>Student Visa</option>
          </select>

          <input
            type="date"
          />

          <select>
            <option>1 Applicant</option>
            <option>2 Applicants</option>
            <option>3 Applicants</option>
            <option>4 Applicants</option>
          </select>
        </div>

        <button className="visa-search-btn">
          Search Visa
        </button>
      </section>

      <section className="coming-soon-card">
        <h2>🛂 Visa Processing Module</h2>

        <p>
          Visa processing integration is currently under
          development and will be available soon.
        </p>
      </section>

      <section className="popular-destinations">
        <h2>Popular Visa Destinations</h2>

        <div className="destination-grid">
          <div className="destination-card">
            UAE
          </div>

          <div className="destination-card">
            Saudi Arabia
          </div>

          <div className="destination-card">
            Turkey
          </div>

          <div className="destination-card">
            Singapore
          </div>
        </div>
      </section>
    </main>
  );
}