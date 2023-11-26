import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Teams = () => {
  return (
    <section id="teams" className='block teams-block'>
    <Container fluid>
    <div className='title-holder'>
     <h2>Our teams</h2>
     <div className='subtitle'>some of our experts</div>
    </div>
    <Row>
      <Col sm={3}>
      <div className='image'>
      Image
      <div className='overlay'>
      <div className='socials'>
       <ul>
        <li><a href="#">FB icon</a></li>
        
       </ul>
      </div>
      </div>      
      </div>
      </Col>
    </Row>
  </Container> 
    </section>
  )
}

export default Teams
