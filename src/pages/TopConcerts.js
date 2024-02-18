import React from "react";
import wave from "../../src/assets/wave.svg";

function TopConcerts() {
  const backgroundStyle = {
    width: "430px",
    height: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageWrapperStyle = {
    margin: "0 15px",
  };

  const fontofAll = {
    fontFamily: "Mona Sans, sans-serif",
  };

  return (
    <>
      <div
        style={{
          ...fontofAll,
          width: "100%",
          backgroundColor: "#F5F5F5",
          backgroundImage: `url(${wave})`,
        }}
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <div className="d-flex" style={{ ...fontofAll, maxWidth: "1280px" }}>
          <div
            className="d-flex flex-column align-items-end text-right"
            style={fontofAll}
          >
            <h1
              className="w-50 fw-bold"
              style={{
                ...fontofAll,
                fontSize: "60px",
                marginTop: "40px",
                color: "#03071E",
              }}
            >
              EXPERIENCE GLOBAL SOUNDS LIVE
            </h1>
            <p
              className="w-25"
              style={{
                ...fontofAll,
                marginTop: "40px",
                marginRight: "150px",
                color: "#FFFFFF",
              }}
            >
              Embark on a musical journey around the world with our curated
              selection of concerts featuring top-notch artists from diverse
              cultures. Immerse yourself in the vibrant energy of live
              performances, as musicians from every corner of the globe come
              together to create unforgettable moments.
            </p>
          </div>
        </div>
        <div
          style={{
            ...fontofAll,
            maxWidth: "1280px",
            marginBottom: "40px",
            marginTop: "40px",
          }}
          className="d-flex"
        >
          <div
            style={{
              ...fontofAll,
              ...backgroundStyle,
              ...imageWrapperStyle,
              backgroundImage:
                "url('https://cache.dpg.media/pruemsozblzo/images/b9829644-463d-11e6-81fe-e2fa661e35e8/j_cole15_website_image_bwwf_standard.jpg?20170420200343')",
            }}
          >
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={fontofAll}
            >
              <h1 style={{ ...fontofAll, color: "#F5F5F5" }}>J.Cole Concert</h1>
              <p style={{ ...fontofAll, color: "#F5F5F5" }}>07.13.2024</p>
            </div>
          </div>
          <div
            style={{
              ...fontofAll,
              ...backgroundStyle,
              ...imageWrapperStyle,
              backgroundImage:
                "url('https://www.onthestrip.com/wp-content/uploads/2023/09/When-We-Were-Young-2023-scaled.jpeg')",
            }}
          >
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={fontofAll}
            >
              <h1 style={{ ...fontofAll, color: "#F5F5F5" }}>Drake Concert</h1>
              <p style={{ ...fontofAll, color: "#F5F5F5" }}>06.09.2024</p>
            </div>
          </div>
          <div
            style={{
              ...fontofAll,
              ...backgroundStyle,
              ...imageWrapperStyle,
              backgroundImage:
                "url('https://lomabeat.com/wp-content/uploads/2023/11/Screen-Shot-2023-11-14-at-10.25.46-AM.png')",
            }}
          >
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={fontofAll}
            >
              <h1 style={{ ...fontofAll, color: "#F5F5F5" }}>
                Travis Scott Concert
              </h1>
              <p style={{ ...fontofAll, color: "#F5F5F5" }}>08.27.2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopConcerts;
