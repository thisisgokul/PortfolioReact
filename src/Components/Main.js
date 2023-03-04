import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../Images/me.jpeg";
import "../Components/CSS/Main.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaArrowDown,
} from "react-icons/fa";

export default function Main() {
  const rgbColor = (r, g, b) => `rgb(${r}, ${g}, ${b})`;
  return (
    <section id="main" className="main">
      <div className="filter-blur">
        <Container>
          <Row>
            <Col md={12} xl={12}>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.3 }}
                className="d-flex justify-content-center borderanimation"
              >
                <img className="myimg rounded-circle " src={me} alt="me" />;
              </motion.div>
              <br />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.7 }}
                className="d-flex justify-content-center typeanimation shadow-1"
              >
                <h1 className="maintext">Hi,I am</h1>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("_GOKUL SUBHASH")
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString("_Full Stack Developer")
                      .start();
                  }}
                  options={{
                    loop: true,
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.7 }}
                className="d-flex justify-content-center"
              >

              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.2 }}
                className="d-flex justify-content-center"
              >
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    rotate: 30,
                    y: -5,
                    opacity: 0.8,
                    backgroundColor: rgbColor(45, 223, 165),
                    color: rgbColor(15, 23, 42),
                    boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  type="button"
                  className="icons  "
                >
                  <i>
                    <FaFacebookF />
                  </i>
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    rotate: 30,
                    y: -5,
                    opacity: 0.8,
                    backgroundColor: rgbColor(45, 223, 165),
                    color: rgbColor(15, 23, 42),
                    boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  type="button"
                  className="icons  "
                >
                  <i>
                    <FaTwitter />
                  </i>
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    rotate: 30,
                    y: -5,
                    opacity: 0.8,
                    backgroundColor: rgbColor(45, 223, 165),
                    color: rgbColor(15, 23, 42),
                    boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  type="button"
                  className=" icons  "
                >
                  <i>
                    <FaLinkedin />
                  </i>
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    rotate: 30,
                    y: -5,
                    opacity: 0.8,
                    backgroundColor: rgbColor(45, 223, 165),
                    color: rgbColor(15, 23, 42),
                    boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  type="button"
                  className=" icons "
                >
                  <i>
                    <FaGithub />
                  </i>
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    rotate: 30,
                    y: -5,
                    opacity: 0.8,
                    backgroundColor: rgbColor(45, 223, 165),
                    color: rgbColor(15, 23, 42),
                    boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  type="button"
                  className=" icons  "
                >
                  <i>
                    <FaInstagram />
                  </i>
                </motion.button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.2 }}
                className="d-flex justify-content-center arrowdiv"
              >
                <motion.h3
                  className="arrow"
                  animate={{ y: [0, 7, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaArrowDown />
                </motion.h3>
                <p className="arrow">_SCROLL DOWN</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
