import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { artistsData } from "../data/artists";
import Cloudy from "../../src/assets/Cloudy.svg";

function ArtistDetail() {
  const [artist, setArtist] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const selectedArtist = artistsData.find((a) => a.id === parseInt(id));
    setArtist(selectedArtist || {});
  }, [id]);

  const MainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${Cloudy}) center/cover no-repeat;
  `;

  const MainContainer2 = styled.div`
    max-width: 1280px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `;

  const MainContainer2Child = styled.div`
    display: flex;
    gap: 150px;
  `;

  const ArtistDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;
  `;

  const ArtistDescriptionUp = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `;

  const ArtistDescriptionDown = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `;

  const ListenToButton = styled.button`
    padding: 8px 0px;
    background-color: #f5f5f5;
    border: 1px solid #03071e;
    color: #03071e;
    width: 100px;
  `;

  const fontofAll = {
    fontFamily: "Mona Sans, sans-serif",
    color: "#03071E",
  };

  return (
    <div style={{ fontofAll, paddingBottom: "100px" }}>
      <MainContainer style={fontofAll}>
        <MainContainer2 style={fontofAll}>
          <MainContainer2Child style={fontofAll}>
            <div>
              <img src={artist.image} alt="" width="100%" />
            </div>
            <ArtistDescription style={fontofAll}>
              <ArtistDescriptionUp style={fontofAll}>
                <h1 style={{ ...fontofAll, fontSize: "48px" }}>
                  {artist.name}
                </h1>
                <h2 style={{ ...fontofAll, color: "#b3b5b4" }}>{artist.job}</h2>
              </ArtistDescriptionUp>
              <ArtistDescriptionDown>
                <p style={{ ...fontofAll, fontSize: "24px" }}>
                  Number of albums: {artist.albumnumber}
                </p>
                <p style={{ ...fontofAll, fontSize: "24px" }}>
                  Number of songs: {artist.songnumber}
                </p>
                <a
                  href={artist.listen}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListenToButton>Listen to</ListenToButton>
                </a>
              </ArtistDescriptionDown>
            </ArtistDescription>
          </MainContainer2Child>
        </MainContainer2>
      </MainContainer>
    </div>
  );
}

export default ArtistDetail;
