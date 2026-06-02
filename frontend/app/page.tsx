import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(to bottom,#081225,#111827)",
          color: "white",
          padding: "60px",
          fontFamily: "Arial",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          Welcome to Geografica
        </h1>

        <p
          style={{
            color: "#9ca3af",
            fontSize: "22px",
          }}
        >
          Compare flights, visas, hotels and travel packages.
        </p>
      </main>
    </>
  );
}