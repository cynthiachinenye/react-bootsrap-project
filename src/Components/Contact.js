import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



const Contact = () => {
    return (
        <section id="contact" className='block contact-block'>

            <Container fluid>
                <div className='title-holder'>
                    <h5>Contact Us</h5>
                    <div className='subtitle'>get connected with us</div>
                </div>
                <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                            <Form.Control placeholder=" Enter Your Full name" type='text' required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='email' placeholder="Enter Your Email address" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='tel' placeholder="Enter Your contact number" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control as="textarea" placeholder="Enter Your Message here" required />
                        </Col>
                    </Row>
                    <div className='btn-holder'>
                        <Button type="submit">Submit</Button>

                    </div>
                </Form>

            </Container>
            <div className='google-map'>
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507364.66123762773!2d2.954242938259636!3d6.548630043748697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1701076558707!5m2!1sen!2sng"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container fluid>
                <div className='contact-info'>
                    <ul>
                        <li>
                            <i className="fas fa-envelope"></i>
                            cynthiachiagu@gmail.com
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                           080-974-077-65
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            Lagos, Nigeria
                        </li>
                    </ul>
                </div>

            </Container>

        </section>
    )
}

export default Contact
