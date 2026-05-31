"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [flights, setFlights] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/flights/")
      .then((res) => res.json())
      .then((data) => {
        setFlights(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);

        setFlights({
          error: String(err),
        });

        setLoading(false);
      });
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h1>Debug Page</h1>

      <p>Loading: {String(loading)}</p>

      <pre>
        {JSON.stringify(flights, null, 2)}
      </pre>
    </main>
  );
}