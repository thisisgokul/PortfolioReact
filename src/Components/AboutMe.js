import { Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import "../Components/CSS/About.css";
import abtme from "../Images/abtme.jpeg";

const AboutMe = () => {
  const rgbColor = (r, g, b) => `rgb(${r}, ${g}, ${b})`;
  return (
    <section id="about" className="Aboutbg text-white">
      <div className="wraper">
        <Container className="my-5">
          <Row>

            <div>
              <div className=" d-flex justify-content-center">

                <h2 className="text-center aboutname underlin">About</h2>

              </div>
            </div>

            <div className="row aboutdiv ">
              <div className="col-lg-4" data-aos="fade-right">
                <div><img src={abtme} className=" img-fluid rounded" alt="" /></div>
              </div>
              <div className="col-lg-8 pt-4">
                <h3 className="myname ">Hi,I am Gokul Subhash.</h3>
                <p className="fst-italic">
                  Hey! i'm a self taught passionate Full stack
                  developer
                </p>
                <div className="row">
                  <div className="col-lg-12 infos">
                    <ul>
                      <li className="text-lg">
                        <strong className="inline-block min-w-[120px] font-medium">
                          First Name :{" "}
                        </strong>

                        <strong className="inline-block min-w-[120px] font-medium">
                          Gokul
                        </strong>
                      </li>
                      <li className="text-lg">
                        <strong className="inline-block min-w-[120px] font-medium">
                          Last Name :{" "}
                        </strong>

                        <strong className="inline-block min-w-[120px] font-medium">
                          Subhash
                        </strong>
                      </li>
                      <li className="text-lg">
                        <strong className="inline-block min-w-[120px] font-medium">
                          Nationality :{" "}
                        </strong>

                        <strong className="inline-block min-w-[120px] font-medium">
                          Indian
                        </strong>
                      </li>
                      <li className="text-lg">
                        <strong className="inline-block min-w-[120px] font-medium">
                          Languages :{" "}
                        </strong>

                        <strong className="inline-block min-w-[120px] font-medium">
                          English , Malayalam
                        </strong>
                      </li>
                      <li className="text-lg">
                        <strong className="inline-block min-w-[120px] font-medium">
                          Address :{" "}
                        </strong>

                        <strong className="inline-block min-w-[120px] font-medium">
                          wayanad,Kerala, INDIA
                        </strong>
                      </li>
                      <li className="text-lg">
                        <strong className="inline-block min-w-[120px] font-medium">
                          Freelance :{" "}
                        </strong>

                        <strong className="inline-block min-w-[120px] font-medium">
                          Available
                        </strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <br />
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    rotate: 0,
                    y: -5,
                    opacity: 0.8,
                    backgroundColor: rgbColor(137, 207, 240),
                    color: rgbColor(15, 23, 42),
                    boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  className="resumebutton"
                >
                  DOWNLOAD RESUME
                </motion.button>
              </div>
            </div>

          </Row>
        </Container>
      </div>

    </section>
  );
}
export default AboutMe;
