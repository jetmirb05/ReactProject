import React, { useEffect, useState } from "react";

function Dashboard() {
  const [selectedConcerts, setSelectedConcerts] = useState([]);

  useEffect(() => {
    const storedConcerts = JSON.parse(localStorage.getItem("selectedConcerts"));
    if (storedConcerts) {
      setSelectedConcerts(storedConcerts);
    }
  }, []);

  const unjoinEvent = (concertTitle) => {
    const updatedConcerts = selectedConcerts.filter(
      (concert) => concert.title !== concertTitle
    );
    localStorage.setItem("selectedConcerts", JSON.stringify(updatedConcerts));
    setSelectedConcerts(updatedConcerts);
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5", padding: "20px" }}>
      {selectedConcerts.length > 0 ? (
        selectedConcerts.map((concert, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#FFFFFF",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              marginBottom: "10px",
            }}
          >
            <h1 style={{ color: "#03071E" }}>{concert.title}</h1>
            <p style={{ color: "#525252" }}>{concert.date}</p>

            <button
              style={{
                backgroundColor: "#D32F2F",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
              }}
              onClick={() => unjoinEvent(concert.title)}
            >
              Unjoin Event
            </button>
          </div>
        ))
      ) : (
        <p style={{ color: "#03071E" }}>No concerts selected</p>
      )}
    </div>
  );
}

export default Dashboard;
