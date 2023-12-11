import React from "react";
import { Link } from "react-router-dom";
import help from "./help.jpg";
import { Carousel, Row, Col } from "react-bootstrap";
import secondImage from "./second.jpg";
import Chatbox from "../Chat/Chatbox.js";
import PeopleCarousel from "./PeopleCarousel.js";
import rs from "./Photo/rs.jpg";
import ra from "./Photo/ra.jpg";
import rk from "./Photo/rk.jpg";

const carouselImageStyle = {
  height: "550px", // Adjust the height of carousel images
};

const donateButtonStyle = {
  display: "block",
  width: "150px",
  margin: "20px auto",
  padding: "10px 15px",
  borderRadius: "5px",
  background: "rgba(255, 165, 0, 0.8)",
  color: "white",
  textTransform: "uppercase",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
};

const imageStyle = {
  width: "100%", // Updated to fill the column width
  borderRadius: "5%",
  height: "auto", // Responsive height
};

const textContainerStyle = {
  maxWidth: "600px",
  color: "black",
  marginTop: "20px", // Added top margin for better spacing
};

const whoWeAreSectionStyle = {
  background: "rgba(253, 228, 228, 0.9)",
  padding: "20px", // Adjusted padding
  borderRadius: "15px",
  textAlign: "left",
  marginBottom: "50px",
};

const h2Style = {
  color: "red",
  fontWeight: "bold",
  marginTop: "0",
  fontSize: "36px",
  padding: "10px 0",
};

const pStyle = {
  fontFamily: "serif",
  marginTop: "10px",
};

const HomePage = () => {
  return (
    <div>
      <Carousel interval={4000} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ra}
            alt="NewImage"
            style={carouselImageStyle}
          />
          <Carousel.Caption>
            <h5>Beautiful Scenery</h5>
            <p>Enjoy the breathtaking view of nature.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={rs}
            alt="Second slide"
            style={carouselImageStyle}
          />
          <Carousel.Caption>
            <h5>Adventure Awaits</h5>
            <p>Embark on a journey to new horizons.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={rk}
            alt="Third slide"
            style={carouselImageStyle}
          />
          <Carousel.Caption>
            <h5>Discover the Unknown</h5>
            <p>Explore the wonders of the world.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={secondImage}
            alt="Third slide"
            style={carouselImageStyle}
          />
          <Carousel.Caption>
            <h5>Discover the Unknown</h5>
            <p>Explore the wonders of the world.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section style={whoWeAreSectionStyle}>
        <Row>
          <Col xs={12} md={6}>
            <img src={help} alt="Description" style={imageStyle} />
          </Col>
          <Col xs={12} md={6}>
            <div style={textContainerStyle}>
              <h2 style={h2Style}>Who We Are?</h2>
              <p style={pStyle}>
                Peace Winds Nepal is an organization that focuses on empowering
                Nepal's children, youth , mens and womens.Peace Winds Nepal
                shall remain an efficient, self-sustainable, and independent
                humanitarian organization committed to provide immediate relief
                to human suffering and reduce vulnerability, under the
                Fundamental Principles of the peace winds Nepal, through its
                network of workers throughout the country working closely with
                communities and governmental and non-governmental organizations
                in a democratic, transparent and participatory way.
              </p>
              <Link to="/donate" style={donateButtonStyle}>
                Donate Now
              </Link>
            </div>
          </Col>
        </Row>
      </section>
      <PeopleCarousel />
      <Chatbox />
    </div>
  );
};

export default HomePage;
