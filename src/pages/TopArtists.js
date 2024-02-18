import React from "react";
import { animate, delay, motion } from "framer-motion";
import {
  NavContainerAnimation,
  ContainerAnimation,
  itemAnimation,
  NavItemAnimation,
} from "../utils/motion";

import decor from "../../src/assets/decor.svg";

function TopArtists() {
  const mainDivStyle = {
    color: "#000000",
    fontFamily: "Mona Sans, sans-serif",
  };

  const letterspacingSyle = {
    letterSpacing: "0.03em",
  };

  const imgStyle = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "30% / 50%",
  };

  const imageWrapperStyle = {
    margin: "0 15px",
  };

  return (
    <motion.div
      style={{
        width: "100%",
        backgroundColor: "#F5F5F5",
        backgroundImage: `url(${decor})`,
      }}
      className="d-flex justify-content-center align-items-center flex-column"
      variants={ContainerAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={ContainerAnimation}
        initial="hidden"
        animate="show"
        className="d-flex flex-column"
        style={{ ...mainDivStyle, maxWidth: "1280px" }}
      >
        {/* Text */}
        <motion.div
          className="d-flex flex-column"
          variants={ContainerAnimation}
          initial="hidden"
          animate="show"
        >
          <h1
            className="w-50 fw-bold"
            style={{
              ...letterspacingSyle,
              fontSize: "60px",
              marginTop: "40px",
              color: "#03071E",
            }}
          >
            POPULAR FROM ALL OVER THE WORLD
          </h1>
          <p
            className="w-25"
            style={{
              ...letterspacingSyle,
              marginTop: "40px",
              color: "#03071E",
            }}
          >
            Discover and immerse yourself in the music of the most trending
            artists from all corners of the globe. Enjoy their captivating songs
            and don't miss the opportunity to experience the motion.diverse
            sounds that are shaping the music industry today.
          </p>
        </motion.div>

        {/* Top Artists */}
        <motion.div
          className="d-flex flex-column justify-content-center align-items-center "
          variants={ContainerAnimation}
          initial="hidden"
          animate="show"
        >
          {/* Group 1 */}
          <motion.div
            variants={ContainerAnimation}
            initial="hidden"
            animate="show"
            className="d-flex justify-content-center align-items-center mb-5"
            style={imageWrapperStyle}
          >
            <motion.div
              className="w-25 h-25"
              style={imageWrapperStyle}
              variants={ContainerAnimation}
              initial="hidden"
              animate="show"
            >
              <motion.img
                variants={itemAnimation}
                style={imgStyle}
                src="https://m.media-amazon.com/images/M/MV5BYjQzODUzYzItMjI2Ni00MTI3LWJhZWYtNjBhYTZmMTI2OGY2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
                alt="artist"
              />
            </motion.div>
            <motion.div
              className="w-25 h-25"
              style={imageWrapperStyle}
              variants={ContainerAnimation}
              initial="hidden"
              animate="show"
            >
              <motion.img
                variants={itemAnimation}
                style={imgStyle}
                src="https://people.com/thmb/qzuuM1D91Z5qbeSMqW9361jACUY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x425:961x427)/Adele-vegas-111922-02-2000-1dd4c7676b084c708839c27f139fc75c.jpg"
                alt="artist"
              />
            </motion.div>
            <motion.div
              className="w-25 h-25"
              style={imageWrapperStyle}
              variants={ContainerAnimation}
              initial="hidden"
              animate="show"
            >
              <motion.img
                variants={itemAnimation}
                style={imgStyle}
                src="https://www.rollingstone.com/wp-content/uploads/2023/11/GettyImages-1448234057-1.jpg?w=1581&h=1054&crop=1"
                alt="artist"
              />
            </motion.div>
          </motion.div>
          {/* Group 2 */}
          <motion.div
            className="d-flex justify-content-center align-items-center mb-5"
            style={imageWrapperStyle}
            variants={ContainerAnimation}
            initial="hidden"
            animate="show"
          >
            <motion.div
              className="w-25 h-25"
              style={imageWrapperStyle}
              variants={ContainerAnimation}
              initial="hidden"
              animate="show"
            >
              <motion.img
                variants={itemAnimation}
                style={imgStyle}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DuaLipaO2020522_%28101_of_110%29_%2852052470251%29_%28cropped%29.jpg/1200px-DuaLipaO2020522_%28101_of_110%29_%2852052470251%29_%28cropped%29.jpg"
                alt="artist"
              />
            </motion.div>
            <motion.div
              className="w-25 h-25"
              style={imageWrapperStyle}
              variants={ContainerAnimation}
              initial="hidden"
              animate="show"
            >
              <motion.img
                variants={itemAnimation}
                style={imgStyle}
                src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2021-12/211209-travis-scott-mn-0845-f3c4d7.jpg"
                alt="artist"
              />
            </motion.div>
            <motion.div
              className="w-25 h-25"
              style={imageWrapperStyle}
              variants={ContainerAnimation}
              initial="hidden"
              animate="show"
            >
              <motion.img
                variants={itemAnimation}
                style={imgStyle}
                src="https://www.billboard.com/wp-content/uploads/2023/02/Ariana-Grande-the-voice-2021-billboard-1548.jpg?w=942&h=623&crop=1"
                alt="artist"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default TopArtists;
