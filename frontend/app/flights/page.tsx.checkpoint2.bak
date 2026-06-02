"use client";

import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [flights, setFlights] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [travelDate, setTravelDate] = useState("");

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/flights/"
      );

      const data = await response.json();
      setFlights(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const searchFlights = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:8000/flights/?from_city=${fromCity}&to_city=${toCity}&travel_date=${travelDate}`
      );

      const data = await response.json();
      setFlights(data);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          padding: "40px",
          background:
            "linear-gradient(to bottom, #081225, #111827)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            marginBottom: "10px",
          }}
        >
          Geografica Travel Platform
        </h1>

        <p
          style={{
            color: "#9ca3af",
            marginBottom: "30px",
            fontSize: "20px",
          }}
        >
          Compare flight prices from multiple providers
        </p>

        <div
          style={{
            backgroundColor: "#1f2937",
            padding: "25px",
            borderRadius: "16px",
            marginBottom: "30px",
            border: "1px solid #374151",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              fontSize: "24px",
            }}
          >
            Search Flights
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr auto",
              gap: "15px",
              alignItems: "end",
            }}
          >
            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#9ca3af" }}>
                From
              </label>
              <input
                type="text"
                placeholder="Hyderabad"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "1px solid #374151",
                  backgroundColor: "#111827",
                  color: "white",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#9ca3af" }}>
                To
              </label>
              <input
                type="text"
                placeholder="Dubai"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "1px solid #374151",
                  backgroundColor: "#111827",
                  color: "white",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "8px", color: "#9ca3af" }}>
                Travel Date
              </label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "1px solid #374151",
                  backgroundColor: "#111827",
                  color: "white",
                }}
              />
            </div>

            <button
              onClick={searchFlights}
              style={{
                background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                color: "white",
                border: "none",
                padding: "14px 24px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
                height: "50px",
              }}
            >
              Search
            </button>
          </div>
        </div>

        {loading && (
          <div style={{ backgroundColor: "#1f2937", padding: "20px", borderRadius: "10px" }}>
            Loading flights...
          </div>
        )}

        {!loading && flights && (
          <>
            {flights.from_city && flights.to_city && (
              <div
                style={{
                  backgroundColor: "#172554",
                  padding: "20px",
                  borderRadius: "12px",
                  marginBottom: "20px",
                  border: "1px solid #1d4ed8",
                }}
              >
                <h3 style={{ marginBottom: "10px" }}>Search Summary</h3>

                <p>
                  <strong>Route:</strong> {flights.from_city} → {flights.to_city}
                </p>

                <p>
                  <strong>Date:</strong> {flights.travel_date}
                </p>
              </div>
            )}

            <div
              style={{
                backgroundColor: "#065f46",
                padding: "25px",
                borderRadius: "12px",
                marginBottom: "25px",
              }}
            >
              <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>
                ✈ Cheapest Flight
              </h2>

              <p><strong>{flights.cheapest.airline}</strong></p>
              <p>
                {flights.cheapest.departure_time} → {flights.cheapest.arrival_time}
              </p>
              <p>Duration: {flights.cheapest.duration}</p>
              <p>Provider: {flights.cheapest.provider}</p>
              <p><strong>₹{flights.cheapest.price}</strong></p>
            </div>

            <div style={{ marginBottom: "20px", fontSize: "22px" }}>
              Active Providers: <strong>{flights.total_providers}</strong>
            </div>

            <div style={{ display: "grid", gap: "15px" }}>
              {flights.results.map((flight: any, index: number) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#1f2937",
                    padding: "20px",
                    borderRadius: "12px",
                    border: "1px solid #374151",
                  }}
                >
                  <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
                    {flight.airline}
                  </h3>

                  <p>
                    {flight.departure_time} → {flight.arrival_time}
                  </p>

                  <p>Duration: {flight.duration}</p>

                  <p>Provider: {flight.provider}</p>

                  <p
                    style={{
                      fontSize: "20px",
                      color: "#10b981",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    ₹{flight.price}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}
