import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
  {
    id: 1,
    image: require('../Assets/blog1.jpg'),
    time: '27 Nov 2016',
    title: 'Coffee Lovers',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend gravida lacus, et congue est pellentesque ultricies. ",
    link: 'https://www.google.com'
  },

  {
    id: 2,
    image: require('../Assets/blog2.jpg'),
    time: '27 Nov 2016',
    title: 'Tips for UI Design',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend gravida lacus, et congue est pellentesque ultricies. ",
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../Assets/blog3.jpg'),
    time: '27 Nov 2016',
    title: 'Beautiful Flower',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend gravida lacus, et congue est pellentesque ultricies. ",
    link: 'https://www.linkdin.com'
  },
]

const Blogs = () => {
  return (
    <section id="blog" className='block  blog-block'>
      
      <Container fluid>
      <div className='title-holder'>
        <h2>Latest from blog</h2>
        <div className='subtitle'>get our latest blogs</div>
      </div>
        <Row>
          {
            blogData.map(blogs => {
              return (
                <Col sm={4} key={blogs.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blogs.image} />
                      <Card.Body>
                        <time>{blogs.time}</time>
                        <Card.Title>{blogs.title}</Card.Title>
                        <Card.Text>
                         {blogs.description}
                        </Card.Text>
                        <a href={blogs.link} className='btn btn-primary'> Read More! <i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>

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

export default Blogs
