import React from 'react'
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const workData = [
    {
        id: 1,
        link: "https://www.google.com",
        Image: require("../Assets/img2.jpg"),
        title: 'Lonely Path',
        subtitle: "web Design"
    },

    {
        id: 2,
        link: "https://www.google.com",
        Image: require("../Assets/img3.jpg"),
        title: 'Photographer Gini',
        subtitle: "Branding"
    },

    {
        id: 3,
        link: "https://www.google.com",
        Image: require("../Assets/img4.jpg"),
        title: 'The Difference',
        subtitle: "web Design"
    },
    {
        id: 4,
        link: "https://www.google.com",
        Image: require("../Assets/img5.jpg"),
        title: 'Nature Patterns',
        subtitle: "Branding"
    },

    {
        id: 5,
        link: "https://www.google.com",
        Image: require("../Assets/img6.jpg"),
        title: 'Lonely Path',
        subtitle: "Photography"
    },
    {
        id: 6,
        link: "https://www.google.com",
        Image: require("../Assets/img7.jpg"),
        title: 'Winter Sonata',
        subtitle: "web Design"
    },
    {
        id: 7,
        link: "https://www.google.com",
        Image: require("../Assets/img8.jpg"),
        title: 'Lonely Path',
        subtitle: "Branding",
    },
    {
        id: 8,
        link: "https://www.google.com",
        Image: require("../Assets/img9.jpg"),
        title: 'Appreciation',
        subtitle: "Photography",
    },
    {
        id: 9,
        link: "https://www.google.com",
        Image: require("../Assets/img2.jpg"),
        title: 'Happy Days',
        subtitle: "web Design",
    },
]

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
const Works = () => {
    return (
        <section id="works" className='block works-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our Works</h2>
                    <div className='subtitle'>our awesome works</div>
                </div>
                <Row className='portfoliolist'>
                    {
                        workData.map(work => {
                            return (

                                <Col sm={4} key={work.id}>
                                    <div className='portfolio-wrapper'>
                                        <a href={work.link}>
                                            
                                        <Image src={work.Image}/>
                                            <div className='label text-center'>
                                                <h3>{work.title}</h3>
                                                <p>{work.subtitle}</p>

                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            )
                        })
                    }

                </Row>
                <Pagination>{items}</Pagination>
            </Container>


        </section>

    )
}

export default Works
