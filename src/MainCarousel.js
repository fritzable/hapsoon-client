import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const MainCarousel = () => (
  <Carousel fade={true}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://thumbs-prod.si-cdn.com/6yRJPR9gwZ0MbO3cq1_uxq9fOq4=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/87/f5/87f5fb72-2461-4418-95e6-e2e90360bbb8/img_3006.jpg"
        alt="Sea Turtle 1"
      />
      <Carousel.Caption>
        <h3>Save the Turtles</h3>
        <p>Welcome to Save the Turtles Hapsoon dashboard.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="http://imgur.com/yp0NqlT.jpg"
        alt="Sea Turtle 2"
      />
      <Carousel.Caption>
        <h3>Add News Update</h3>
        <p>Click Add Episode to create a new update.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://rangerrick.org/wp-content/uploads/2018/03/Turtle-Tale-RR-Jr-June-July-2017.jpg"
        alt="Sea Turtle 3"
      />
      <Carousel.Caption>
        <h3>Engage donors on mobile and browser</h3>
        <p>Donors love your mission. Make sure they stay updated.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default MainCarousel
