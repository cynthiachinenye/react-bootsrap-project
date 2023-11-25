import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const workData = []

const Works = () => {
    return (
        <section id="works" className='block works-block'>
            <Container fluid>
            <div className='title-holder'>
            <h2>Our Works</h2>
            <div className='subtitle'>our awesome works</div>
            </div>
                <Row className='portfolioList'>
                    <Col sm={4}>
                    <div className='portifolio-wrapper'>
                    <a href="#">
                    Image 
                    <div className='label text-center'>
                    <h3>Title</h3>
                    <p>Subtitle</p>
                    
                    </div>
                    </a>
                    </div>
                    </Col>
                </Row>
            </Container>

        </section>

    )
}

export default Works
