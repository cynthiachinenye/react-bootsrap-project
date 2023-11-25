import React from 'react'
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from "../Assets/img1.jpg"

const About = () => {
     const html = 80;
     const responsive = 95;
     const photoshop  = 60;
  return (
   <section id="about" className='block about-block'>
    <Container fluid>
     <div className='title-holder'>
     <h2>About Us</h2>
     <div className='subtitle'>learn more about us</div>
     </div>
     <Row>
     <Col sm={6}>
    <Image src={img1}/>
     
     </Col>

     <Col sm={6}>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim enim vitae metus pellentesque, eu varius mauris condimentum.</p>

   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim enim vitae metus pellentesque, eu varius mauris condimentum.</p>

     <div className='progress-block'>
     <h4> HTML/CSS/JAVASCRIPT</h4>
     <ProgressBar now={html} label={`${html}%`} />
     </div>

     <div className='progress-block'>
     <h4> RESPONSIVE</h4>
     <ProgressBar now={responsive} label={`${responsive}%`} />
     </div>

     <div className='progress-block'>
     <h4> PHOTOSHOP</h4>
     <ProgressBar now={photoshop} label={`${photoshop}%`} />
     </div>
     </Col>

     </Row>
    </Container>
   </section>
  )
}

export default About
