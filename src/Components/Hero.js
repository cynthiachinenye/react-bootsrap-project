import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

var heroData = [
    {
        id: 1,
        image: require('../Assets/img-hero1.jpg'),
        title: "The Perfect design for Your website",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim enim vitae metus pellentesque, eu varius mauris condimentum.",
        link: "https://www.google.com",
    },

    {
        id: 2,
        image: require('../Assets/img-hero2.jpg'),
        title: "Start Your Future Financial Plan",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim enim vitae metus pellentesque, eu varius mauris condimentum.",
        link: "https://www.facebook.com",
    },

    {
        id: 3,
        image: require('../Assets/img-hero3.jpg'),
        title: "Enjoy the Difference",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim enim vitae metus pellentesque, eu varius mauris condimentum.",
        link: "https://www.twitter.com",
    },


]

const Hero = () => {
    return (
        <section id="home" className='hero-block'>
            <Carousel>
                {
                    heroData.map((e) => {
                        return (
                            <Carousel.Item key={e.id}>
                                <img className='d-block w-100' src={e.image} alt={"Slide"+ e.id} />

                                <Carousel.Caption>
                                    <h3>{e.title}</h3>
                                    <p>{e.description}</p>
                                    <a href={e.link} className='btn btn-primary'>Learn More <i className="fas fa-chevron-right"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }


            </Carousel>


        </section>
    )
}

export default Hero
