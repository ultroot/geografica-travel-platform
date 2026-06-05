"use client";

import "./flights.css";

import { useEffect, useState } from "react";

const AIRPORTS = [
  "HYD - Hyderabad",
  "DEL - Delhi",
  "BOM - Mumbai",
  "BLR - Bangalore",
  "MAA - Chennai",
  "CCU - Kolkata",
  "COK - Kochi",
  "GOI - Goa",
  "AMD - Ahmedabad",
  "PNQ - Pune",
  "JAI - Jaipur",
  "LKO - Lucknow",
  "DXB - Dubai",
  "AUH - Abu Dhabi",
  "SHJ - Sharjah",
  "DOH - Doha",
  "MCT - Muscat",
  "KWI - Kuwait",
  "RUH - Riyadh",
  "JED - Jeddah",
  "SIN - Singapore",
  "BKK - Bangkok",
  "KUL - Kuala Lumpur",
  "LHR - London Heathrow",
  "CDG - Paris",
  "FRA - Frankfurt",
  "JFK - New York",
  "IST - Istanbul",
];

export default function FlightsPage() {
  const [flights, setFlights] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [passengers, setPassengers] = useState("1");

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
      console.error(err);
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
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <main className="flightsPage">
        <section className="heroSection">
          <h1 className="heroTitle">
            Find Your Next Journey
          </h1>

          <p className="heroSubtitle">
            Premium flight comparison for travelers
          </p>
        </section>

        <section className="searchCard">
          <div className="searchGrid">
            <div className="inputGroup">
              <label>From Airport</label>

              <input
                list="from-airports"
                placeholder="Search airport..."
                value={fromCity}
                onChange={(e) =>
                  setFromCity(e.target.value)
                }
              />

              <datalist id="from-airports">
                {AIRPORTS.map((airport) => (
                  <option
                    key={airport}
                    value={airport}
                  />
                ))}
              </datalist>
            </div>

            <div className="inputGroup">
              <label>To Airport</label>

              <input
                list="to-airports"
                placeholder="Search airport..."
                value={toCity}
                onChange={(e) =>
                  setToCity(e.target.value)
                }
              />

              <datalist id="to-airports">
                {AIRPORTS.map((airport) => (
                  <option
                    key={airport}
                    value={airport}
                  />
                ))}
              </datalist>
            </div>

            <div className="inputGroup">
              <label>Travel Date</label>

              <input
                type="date"
                value={travelDate}
                onChange={(e) =>
                  setTravelDate(e.target.value)
                }
              />
            </div>

            <div className="inputGroup">
              <label>Passengers</label>

              <select
                value={passengers}
                onChange={(e) =>
                  setPassengers(e.target.value)
                }
              >
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4 Passengers</option>
              </select>
            </div>
          </div>

          <button
            className="searchButton"
            onClick={searchFlights}
          >
            Search Flights
          </button>
        </section>

        {!loading &&
          flights &&
          flights.from_city &&
          flights.to_city && (
            <section className="routeBanner">
              <div className="routeCode">
                {flights.from_city} ✈ {flights.to_city}
              </div>

              <div className="routeName">
                Travel Date: {flights.travel_date}
              </div>
            </section>
          )}

        {loading && (
          <div className="routeBanner">
            Loading flights...
          </div>
        )}

        {!loading && flights && (
          <section className="flightsGrid">
            <div className="flightCard">
              <div className="flightHeader">
                <div>
                  <div className="airlineName">
                    {flights.cheapest.airline}
                  </div>

                  <div>
                    Cheapest Available Option
                  </div>
                </div>

                <div className="price">
                  ₹{flights.cheapest.price}
                </div>
              </div>

              <div className="flightTimes">
                <span>
                  {flights.cheapest.departure_time}
                </span>

                <span>
                  {flights.cheapest.duration}
                </span>

                <span>
                  {flights.cheapest.arrival_time}
                </span>
              </div>

              <div className="badge">
                CHEAPEST
              </div>
            </div>

            {flights.results.map(
              (
                flight: any,
                index: number
              ) => (
                <div
                  className="flightCard"
                  key={index}
                >
                  <div className="flightHeader">
                    <div>
                      <div className="airlineName">
                        {flight.airline}
                      </div>

                      <div>
                        {flight.provider}
                      </div>
                    </div>

                    <div className="price">
                      ₹{flight.price}
                    </div>
                  </div>

                  <div className="flightTimes">
                    <span>
                      {flight.departure_time}
                    </span>

                    <span>
                      {flight.duration}
                    </span>

                    <span>
                      {flight.arrival_time}
                    </span>
                  </div>

                  {index === 0 && (
                    <div className="badge">
                      BEST VALUE
                    </div>
                  )}
                </div>
              )
            )}
          </section>
        )}
      </main>
    </>
  );
}