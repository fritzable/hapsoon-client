import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const MainCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="http://imgur.com/yp0NqlT.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="http://www.natgeokids.com/wp-content/uploads/2017/02/turtle-facts-1.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://rangerrick.org/wp-content/uploads/2018/03/Turtle-Tale-RR-Jr-June-July-2017.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

export default MainCarousel
