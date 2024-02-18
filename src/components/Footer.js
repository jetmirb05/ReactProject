import React from "react";

function Footer() {
  const fontofAll = {
    fontFamily: "Mona Sans, sans-serif",
  };
  return (
    <>
      <div
        className="container"
        style={{
          ...fontofAll,
          backgroundColor: "#03071E",
          color: "#fff",
          marginTop: "150px",
        }}
      >
        <footer className="py-3 my-4" style={fontofAll}>
          <ul
            className="nav justify-content-center border-bottom pb-3 mb-3"
            style={fontofAll}
          >
            <li className="nav-item" style={fontofAll}>
              <a
                href="#"
                className="nav-link px-2 text-white"
                style={fontofAll}
              >
                Home
              </a>
            </li>
            <li className="nav-item" style={fontofAll}>
              <a
                href="#"
                className="nav-link px-2 text-white"
                style={fontofAll}
              >
                Features
              </a>
            </li>
            <li className="nav-item" style={fontofAll}>
              <a
                href="#"
                className="nav-link px-2 text-white"
                style={fontofAll}
              >
                Pricing
              </a>
            </li>
            <li className="nav-item" style={fontofAll}>
              <a
                href="#"
                className="nav-link px-2 text-white"
                style={fontofAll}
              >
                FAQs
              </a>
            </li>
            <li className="nav-item" style={fontofAll}>
              <a
                href="#"
                className="nav-link px-2 text-white"
                style={fontofAll}
              >
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-white" style={fontofAll}>
            © 2023 ConcertWebsite, Inc
          </p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
