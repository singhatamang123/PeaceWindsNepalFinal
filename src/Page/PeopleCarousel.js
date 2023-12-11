// PeopleCarousel.jsx

import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import ow1 from "./Photo/ow1.jpg";
import ow2 from "./Photo/ow2.jpg";

const peopleData = [
  {
    name: "Palden Tamang",
    position: "CEO",
    comment:
      "Make a career of humanity. Commit yourself to the noble struggle for equal rights. You will make a better person of yourself, a greater nation of your country, and a finer world to live in",
    image: ow1,
  },
  {
    name: "Chandra Kumar Ghising",
    position: "Board Of DirectorD",
    comment:
      "“Be certain that you do not die without having done something wonderful for humanity.”",
    image: ow2,
  },
  // Add more people as needed
];

const PeopleCarousel = () => {
  return (
    <Carousel>
      {peopleData.map((person, index) => (
        <Carousel.Item
          key={index}
          style={{ height: "400px", backgroundColor: "#f8f9fa" }}
        >
          <Container className="h-100">
            <Row className="justify-content-center align-items-center h-100">
              <Col md={4} className="text-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="img-fluid rounded-circle mb-4"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <h3 className="text-dark">{person.name}</h3>
                <p className="text-muted">{person.position}</p>
                <p className="lead text-muted">{person.comment}</p>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PeopleCarousel;
