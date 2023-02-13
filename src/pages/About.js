import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import backgroundImage from "../Images/Aurora.jpg";
import headshot from "../Images/HeadshotPicture.jpg";
import "./aboutStyle.css";
import API from "../utils/API";

function About() {
  return (
    <div>
      <Hero backgroundImage={backgroundImage}>
        <h1 className="heroHeader">Welcome to my Coding Portfolio!</h1>
        <img className="headshotIMG" src={headshot} alt="Headshot of Christopher Gardner"></img>
        <h2>Front-end Web Development</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            Hi! Thanks for looking at my coding portfolio. I am an aspiring programmer working 
            particularly on front end web development. I aim to make great looking and functioning 
            products with efficient code.
            </p>
            {/* <p>
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
              malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
              ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
              nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
              Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
              porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
            <p>
              Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
              tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh
              sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis.
              Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim
              congue at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc
              vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam
              nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem.
              Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus
              libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus
              eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
              interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet
              massa.
            </p> */}
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h1>Technical Skills</h1>
          </Col>
        </Row>
        <Row>
        <Col size="lg-6 md-6 sm-6">
                    <ul className="list">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                        <li>Bootstrap5</li>
                    </ul>
        </Col>
                <Col size="lg-6 md-6 sm-6">
                    <ul className="list">
                        <li>jQuery</li>
                        <li>Node</li>
                        <li>React</li>
                        <li>Agile working</li>
                    </ul>
                </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
