import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "#111827",
        borderBottom: "1px solid #374151",
      }}
    >
      <Link
        href="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        Geografica
      </Link>

      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <Link
          href="/flights"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Flights
        </Link>

        <Link
          href="/visas"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Visas
        </Link>

        <Link
          href="/packages"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Packages
        </Link>

        <Link
          href="/hotels"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Hotels
        </Link>
      </div>
    </nav>
  );
}
