import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const MainCarousel = () => (
  <Carousel fade={false} pauseOnHover={true}>
    <Carousel.Item>
      <img
        src="https://www.burkemuseum.org/sites/default/files/images/biology/herpetology/washington/green-sea-turtle-1100x555.jpg"
        alt="Sea Turtle 1"
      />
      <Carousel.Caption>
        <h3>Save the Turtles</h3>
        <p>Welcome to Save the Turtles Hapsoon dashboard.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        src="https://www.scitecheuropa.eu/wp-content/uploads/2019/09/Sea-turtle-1068x601.jpg"
        alt="Sea Turtle 2"
      />
      <Carousel.Caption>
        <h3>Add News Update</h3>
        <p>Click Add Episode to create a new update.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
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
