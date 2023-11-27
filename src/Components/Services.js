import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const serviceData = [
    {
        id: 1,
        icon: "fas fa-clone",
        title: "Responsive Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim enim vitae metus pellentesque, eu varius mauris condimentum. Vestibulum malesuada orci lectus, a blandit metus vehicula eu. Suspendisse potenti."
    },
    {
        id: 2,
        icon: "fas fa-snowflake",
        title: "Creative Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim enim vitae metus pellentesque, eu varius mauris condimentum. Vestibulum malesuada orci lectus, a blandit metus vehicula eu. Suspendisse potenti."
    },
    {
        id: 3,
        icon: "fas fa-plug",
        title: "SEO Optimized",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim enim vitae metus pellentesque, eu varius mauris condimentum. Vestibulum malesuada orci lectus, a blandit metus vehicula eu. Suspendisse potenti."
    },
    {
        id: 4,
        icon: "fas fa-desktop",
        title: "Retina Ready",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim enim vitae metus pellentesque, eu varius mauris condimentum. Vestibulum malesuada orci lectus, a blandit metus vehicula eu. Suspendisse potenti."
    },
    {
        id: 5,
        icon: "fas fa-trophy",
        title: "Browser Compatibility",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim enim vitae metus pellentesque, eu varius mauris condimentum. Vestibulum malesuada orci lectus, a blandit metus vehicula eu. Suspendisse potenti."
    },
    {
        id: 6,
        icon: "fas fa-life-ring",
        title: "Customer Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim enim vitae metus pellentesque, eu varius mauris condimentum. Vestibulum malesuada orci lectus, a blandit metus vehicula eu. Suspendisse potenti."
    },
]


const Services = () => {
    return (
        <section id="services" className='block services-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our Services</h2>
                    <div className='subtitle'> services we provide</div>
                </div>
                <Row>
                    {
                        serviceData.map((service) => {
                            return (

                                <Col sm={4} className='holder' key={service.id}>

                                    <div className='icon'>
                                       <i className={service.icon}></i>
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>


                                </Col>
                            )


                        })
                    }

                </Row>
            </Container>
        </section>
    )
}

export default Services
