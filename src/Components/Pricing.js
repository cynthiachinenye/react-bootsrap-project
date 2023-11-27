import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const priceData = [
    {
        id: 1,
        plan: 'Basic',
        price: "£49",
        features: ['Wireframing', 'Visual Design', 'free Hosting', 'Support & Assistance'],
        link: 'https://www.google.com'
    },
    {
        id: 2,
        plan: 'Premium',
        price: "£149",
        features: ['Wireframing', 'Visual Design', 'free Hosting', 'Support & Assistance'],
        link: 'https://www.google.com'
    },
    
    {


        id: 3,
        plan: 'Ultimate',
        price: "£349",
        features: ['Wireframing', 'Visual Design', 'free Hosting', 'Support & Assistance'],
        link: 'https://www.google.com'
    },
]


const Pricing = () => {
    return (
        <section id="pricing" className='block pricing-block'>

            <Container fluid>
                <div className='title-holder'>
                    <h2>Pricing &amp; plans</h2>
                    <div className='subtitle'>check our pricing &amp; plans</div>
                </div>
                <Row>
                {
                    priceData.map(Pricing =>{
                        return(
                            <Col sm={4} key={Pricing.id}>
                            <div className='heading'>
                                <h3>{Pricing.plan}</h3>
                                <span className='price'>{Pricing.price}</span>
                            </div>
                            <div className='content'>
    
                                <ListGroup>
                                {
                                    Pricing.features.map((feature,index) =>{
                                        return(
                                            <ListGroup.Item key={index}>{feature}</ListGroup.Item>

                                        )
                                    })
                                }
                                </ListGroup>
    
                            </div>
                            <div className='btn-holder'>
                                <a href={Pricing.link} className='btn btn-primary'>Order Now</a>
                            </div>
                        </Col>
                        )
                    })
                }
                  
                </Row>
            </Container>

        </section>
    )
}

export default Pricing
