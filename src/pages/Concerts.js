import React from "react";
import Hexagon from "../assets/Hexagon.svg";
import ContourLine from "../assets/ContourLine.svg";

function Concerts() {
  const styles = `
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .main-container {
        width: 100%;
        background-image: url(${ContourLine}); 
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .main-container2 {
        max-width: 1280px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .main-container2-child {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }

    .child-container {
        
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 500px;
        height: 250px;
        margin: 0.5%;
    }

    .nephew {
        background-color: rgba(3, 7, 30, 0.7);
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .nephew-up {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        text-align: center;
    }

    .join-button {
        padding: 10px 0;
        width: 70px;
        background-color: #9050DC;
        border: 1px solid #9050DC;
        color: white;
        border-radius: 8px;
    }

    .nephew-down {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
  `;
  const fontofAll = {
    fontFamily: "Mona Sans, sans-serif",
  };

  const handleJoinClick = (concertInfo) => {
    let concerts = JSON.parse(localStorage.getItem("selectedConcerts")) || [];
    // Check if the concert already exists to avoid duplicates
    if (
      !concerts.some(
        (concert) =>
          concert.title === concertInfo.title &&
          concert.date === concertInfo.date
      )
    ) {
      concerts.push(concertInfo);
      localStorage.setItem("selectedConcerts", JSON.stringify(concerts));
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="main-container" style={fontofAll}>
        <div className="main-container2" style={fontofAll}>
          <div className="main-container2-child" style={fontofAll}>
            <div
              className="child-container"
              style={{
                ...fontofAll,
                backgroundImage: `url('https://variety.com/wp-content/uploads/2023/10/GettyImages-1448234007-2-e1696610797631.jpg')`,
              }}
            >
              <div className="nephew" style={fontofAll}>
                <div className="nephew-up" style={fontofAll}>
                  <h1 style={fontofAll}>Drake Concert</h1>
                  <p style={fontofAll}>17.02.2024</p>
                </div>
                <div className="nephew-down" style={fontofAll}>
                  <button
                    className="join-button"
                    style={fontofAll}
                    onClick={() =>
                      handleJoinClick({
                        title: "Drake Concert",
                        date: "17.02.2024",
                      })
                    }
                  >
                    JOIN
                  </button>
                </div>
              </div>
            </div>
            <div
              className="child-container"
              style={{
                backgroundImage: `url('https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/IYUZDGYVEBHQLLSA4RYYA7JH6A.jpg')`,
              }}
            >
              <div className="nephew" style={fontofAll}>
                <div className="nephew-up" style={fontofAll}>
                  <h1 style={fontofAll}>Lil Baby Concert</h1>
                  <p style={fontofAll}>18.05.2024</p>
                </div>
                <div className="nephew-down" style={fontofAll}>
                  <button
                    className="join-button"
                    style={fontofAll}
                    onClick={() =>
                      handleJoinClick({
                        title: "Lil Baby Concert",
                        date: "18.05.2024",
                      })
                    }
                  >
                    JOIN
                  </button>
                </div>
              </div>
            </div>
            <div
              className="child-container"
              style={{
                backgroundImage: `url('https://www.elnacional.cat/uploads/s1/45/22/65/45/concert-morad01.jpeg')`,
              }}
            >
              <div className="nephew" style={fontofAll}>
                <div className="nephew-up" style={fontofAll}>
                  <h1 style={fontofAll}>Morad Concert</h1>
                  <p style={fontofAll}>06.07.2024</p>
                </div>
                <div className="nephew-down" style={fontofAll}>
                  <button
                    className="join-button"
                    style={fontofAll}
                    onClick={() =>
                      handleJoinClick({
                        title: "Morad Concert",
                        date: "06.07.2024",
                      })
                    }
                  >
                    JOIN
                  </button>
                </div>
              </div>
            </div>
            <div
              className="child-container"
              style={{
                backgroundImage: `url('https://wp.dailybruin.com/images/2022/09/web.ae_.weekndreview.MC_.jpg')`,
              }}
            >
              <div className="nephew" style={fontofAll}>
                <div className="nephew-up" style={fontofAll}>
                  <h1 style={fontofAll}>Weeknd Concert</h1>
                  <p style={fontofAll}>31.12.2024</p>
                </div>
                <div className="nephew-down" style={fontofAll}>
                  <button
                    className="join-button"
                    style={fontofAll}
                    onClick={() =>
                      handleJoinClick({
                        title: "Weeknd Concert",
                        date: "31.12.2024",
                      })
                    }
                  >
                    JOIN
                  </button>
                </div>
              </div>
            </div>
            <div
              className="child-container"
              style={{
                backgroundImage: `url('https://www.rollingstone.com/wp-content/uploads/2023/06/Weekends-with-Adele-tickets-e1697840693866.jpg?w=1399&h=882&crop=1')`,
              }}
            >
              <div className="nephew" style={fontofAll}>
                <div className="nephew-up" style={fontofAll}>
                  <h1 style={fontofAll}>Adele Concert</h1>
                  <p style={fontofAll}>23.02.2024</p>
                </div>
                <div className="nephew-down" style={fontofAll}>
                  <button
                    className="join-button"
                    style={fontofAll}
                    onClick={() =>
                      handleJoinClick({
                        title: "Adele Concert",
                        date: "23.02.2024",
                      })
                    }
                  >
                    JOIN
                  </button>
                </div>
              </div>
            </div>
            <div
              className="child-container"
              style={{
                backgroundImage: `url('https://ew.com/thmb/sCYa6SIlRwR1Px-sNuYsji1WfBc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Travis-Scott-6f52f81c795c418f9b4453b56012a05c.jpg')`,
              }}
            >
              <div className="nephew" style={fontofAll}>
                <div className="nephew-up" style={fontofAll}>
                  <h1 style={fontofAll}>Travis Scott Concert</h1>
                  <p style={fontofAll}>19.07.2024</p>
                </div>
                <div className="nephew-down" style={fontofAll}>
                  <button
                    className="join-button"
                    style={fontofAll}
                    onClick={() =>
                      handleJoinClick({
                        title: "Travis Scott Concert",
                        date: "19.07.2024",
                      })
                    }
                  >
                    JOIN
                  </button>
                </div>
              </div>
            </div>
            <div
              className="child-container"
              style={{
                backgroundImage: `url('https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2Ff1ce774c-6daf-11e9-9ff9-8c855179f1c4?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1')`,
              }}
            >
              <div className="nephew" style={fontofAll}>
                <div className="nephew-up" style={fontofAll}>
                  <h1 style={fontofAll}>Dave Concert</h1>
                  <p style={fontofAll}>26.08.2024</p>
                </div>
                <div className="nephew-down" style={fontofAll}>
                  <button
                    className="join-button"
                    style={fontofAll}
                    onClick={() =>
                      handleJoinClick({
                        title: "Dave Concert",
                        date: "26.08.2024",
                      })
                    }
                  >
                    JOIN
                  </button>
                </div>
              </div>
            </div>
            <div
              className="child-container"
              style={{
                backgroundImage: `url('https://www.totaalrez.com/v2/wp-content/uploads/2022/11/@lieselfrth-central-cee-04534-1300x867.jpg')`,
              }}
            >
              <div className="nephew" style={fontofAll}>
                <div className="nephew-up" style={fontofAll}>
                  <h1 style={fontofAll}>Central Cee Concert</h1>
                  <p style={fontofAll}>18.10.2024</p>
                </div>
                <div className="nephew-down" style={fontofAll}>
                  <button
                    className="join-button"
                    style={fontofAll}
                    onClick={() =>
                      handleJoinClick({
                        title: "Central Cee Concert",
                        date: "18.10.2024",
                      })
                    }
                  >
                    JOIN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Concerts;
