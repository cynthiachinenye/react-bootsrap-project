import React from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';


var testimonialsData = [
    {
        id: 1,
        name: 'John wills',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique, justo sit amet vehicula efficitur, urna velit interdum dolor, in aliquam magna enim id mauris.",
        designation: 'Manager'
    },
    {
        id: 2,
        name: 'Jasmine perry',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique, justo sit amet vehicula efficitur, urna velit interdum dolor, in aliquam magna enim id mauris.",
        designation: 'Accountant'
    },
    {
        id: 3,
        name: 'Rocky Johnson',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique, justo sit amet vehicula efficitur, urna velit interdum dolor, in aliquam magna enim id mauris.",
        designation: 'CEO'
    },
]
const Testimonial = () => {
    return (
        <section id="testimonials" className='testimonials-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Client testimonials</h2>
                    <div className='subtitle'>what client says about us</div>
                </div>
                <Carousel controls={false}>
                    {
                        testimonialsData.map(test => {

                            return (
                                <Carousel.Item key={test.id}>
                                    <blockquote>
                                        <p>{test.description}</p>
                                        <cite>
                                            <span className='name'>{test.name}</span>
                                            <span className='designation'>{test.designation}</span>
                                        </cite>
                                    </blockquote>
                                </Carousel.Item>

                            )
                        })
                    }
                </Carousel>
            </Container>
        </section>
    )
}

export default Testimonial
