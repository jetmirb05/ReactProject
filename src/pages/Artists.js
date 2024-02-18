import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { artists } from "../data/artists";

import diff from "../assets/diff.svg";

function Artists() {
  const [users, setUsers] = useState([]);

  const styles = {
    mainContainer: {
      width: "100%",
      padding: "20px 0",
      backgroundImage: `url(${diff})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    gridContainer: {
      maxWidth: "1280px",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      justifyContent: "center",
      alignItems: "center",
      gap: "40px",
      margin: "0 auto",
      fontFamily: "Mona Sans, sans-serif",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      gap: "40px",
      borderRadius: "8px",
      overflow: "hidden",
      height: "350px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      justifyContent: "flex-end",
    },
  };

  const fontofAll = {
    fontFamily: "Mona Sans, sans-serif",
  };

  return (
    <div style={{ ...styles.mainContainer, ...fontofAll, paddingTop: "80px" }}>
      <div style={styles.gridContainer}>
        {artists?.map((artist) => (
          <Link
            key={artist.id}
            to={`/artists/${artist.id}`}
            state={{ name: artist.name }}
            style={{
              ...fontofAll,
              ...styles.card,
              backgroundImage: `url(${artist.image})`,
            }}
          >
            <h3
              style={{
                ...fontofAll,
                color: "white",
                textAlign: "center",
                margin: "10px 0",
              }}
            >
              {artist.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Artists;
