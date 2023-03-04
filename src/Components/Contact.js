import React from "react";
import { motion } from "framer-motion";
import { Container, } from "react-bootstrap";
import "../Components/CSS/Contact.css";

export default function Contact() {
  return (
    <div id="contact" className="Contactdiv">
      <div className="wrapercontact">
        <Container id="contact">
          <h2 className="contacthead d-flex justify-content-center">
            Contact Me
          </h2>

          <motion.div animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1, repeat: Infinity }} className="col-sm-12 col-md-12 divscreen ">
            <div className="background">
              <div className="container">
                <div className="screen">
                  <div className="screen-header">
                    <div className="screen-header-left">
                      <div className="screen-header-button close"></div>
                      <div className="screen-header-button maximize"></div>
                      <div className="screen-header-button minimize"></div>
                    </div>
                    <div className="screen-header-right">
                      <div className="screen-header-ellipsis"></div>
                      <div className="screen-header-ellipsis"></div>
                      <div className="screen-header-ellipsis"></div>
                    </div>
                  </div>
                  <div className="screen-body">
                    <div className="screen-body-item left">
                      <div className="app-title">
                        <span>CONTACT</span>
                        <span>ME</span>
                      </div>
                      <div className="app-contact">
                        CONTACT INFO : +91 589877869
                      </div>
                    </div>
                    <div className="screen-body-item">
                      <div className="app-form">
                        <div className="app-form-group">
                          <input
                            className="app-form-control"
                            placeholder="NAME"

                          />
                        </div>
                        <div className="app-form-group">
                          <input className="app-form-control" placeholder="EMAIL" />
                        </div>
                        <div className="app-form-group">
                          <input
                            className="app-form-control"
                            placeholder="CONTACT NO"
                          />
                        </div>
                        <div className="app-form-group message">
                          <input className="app-form-control" placeholder="MESSAGE" />
                        </div>
                        <div className="app-form-group buttons">
                          <button className="app-form-button">CANCEL</button>
                          <button className="app-form-button">SEND</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="credits">
                  Freelance Available

                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}
