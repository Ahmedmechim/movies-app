import { height } from "@mui/system";
import React from "react";
import { Carousel } from "react-bootstrap";

const Faza = () => {
  return (
    <div>
      <Carousel className="poster">
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://media.newstrack.in/uploads/entertainment/hollywood-news/Aug/23/big_thumb/3r23_61235c2c161de.jpeg"
            alt="First slide"
      />
          <Carousel.Caption>
            <h3>Squid Game</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://baylorlariat.com/wp-content/uploads/2021/01/the-queens-gambit.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>The Queen's Gambit</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.alphacoders.com/676/thumb-1920-676781.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>The Revenant</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Faza;
