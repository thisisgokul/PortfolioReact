import React from "react";
import "../Components/CSS/Skillpage.css";
import meter1 from "../Images/meter1.svg";
import meter2 from "../Images/meter2.svg";
import meter3 from "../Images/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  Row,
  Col,
  Container,
} from "react-bootstrap";


const SkillsPage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="skill" className="skillbg">
      <div className="wraper2">
        <Container>
          <Row>
            <h1 className="d-flex justify-content-center skillstext text-white">
              Skills
            </h1>
            <Col lg={12}>
              <div className="text-white">

                <div className="col-12">
                  <div className="skill-bx wow zoomIn">
                    <h2 className="myskillshead">Skills</h2>
                    <p>
                      The following skills are part of my toolbox.
                      One of the things I love is learning new technologies.<br></br> It's amazing how huge technology is!
                    </p>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="owl-carousel owl-theme skill-slider"
                    >
                      <div className="item">
                        <img src={meter2} alt="" />
                        <h5>ReactJs</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="" />
                        <h5>NodeJs</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="" />
                        <h5>Javascript</h5>
                      </div>
                      <div className="item">
                        <img src={meter1} alt="" />
                        <h5>Html5</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="" />
                        <h5>CSS</h5>
                      </div>
                      <div className="item">
                        <img src={meter1} alt="" />
                        <h5>Bootstrap</h5>
                      </div>
                    </Carousel>
                  </div>

                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default SkillsPage;
