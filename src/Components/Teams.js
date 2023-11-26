import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
const teamData = [

  {
    id: 1,
    Image: require('../Assets/team1.jpg'),
    fbLink:'https://www.facebaook.com',
    twitterLink:'https://www.twitter.com',
    linkdinLink:'https://www.linkdin.com',
    name:'Gaberiel Hart',
    designation:'CEO',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue, nulla vitae dictum dictum,',
  },
  {
    id: 2,
    Image: require('../Assets/team2.jpg'),
    fbLink:'https://www.facebaook.com',
    twitterLink:'https://www.twitter.com',
    linkdinLink:'https://www.linkdin.com',
    name:'David Anthony',
    designation:'Manager',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue, nulla vitae dictum dictum,',
  },
  {
    id: 3,
    Image: require('../Assets/team5.jpg'),
    fbLink:'https://www.facebaook.com',
    twitterLink:'https://www.twitter.com',
    linkdinLink:'https://www.linkdin.com',
    name:'Nicholas Perry',
    designation:'Uk Designer',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue, nulla vitae dictum dictum,',
  },
  {
    id: 4,
    Image: require('../Assets/team9.jpg'),
    fbLink:'https://www.facebaook.com',
    twitterLink:'https://www.twitter.com',
    linkdinLink:'https://www.linkdin.com',
    name:'Sarah Wills',
    designation:'Developer',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue, nulla vitae dictum dictum,',
  },
  {
    id: 5,
    Image: require('../Assets/team5.jpg'),
    fbLink:'https://www.facebaook.com',
    twitterLink:'https://www.twitter.com',
    linkdinLink:'https://www.linkdin.com',
    name:'Taylor Lopez',
    designation:'Developer',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue, nulla vitae dictum dictum,',
  },
  {
    id: 6,
    Image: require('../Assets/team6.jpg'),
    fbLink:'https://www.facebaook.com',
    twitterLink:'https://www.twitter.com',
    linkdinLink:'https://www.linkdin.com',
    name:'Sophia Pitt',
    designation:'Developer',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue, nulla vitae dictum dictum,',
  },
  {
    id: 7,
    Image: require('../Assets/team7.jpg'),
    fbLink:'https://www.facebaook.com',
    twitterLink:'https://www.twitter.com',
    linkdinLink:'https://www.linkdin.com',
    name:'Michael Kachi',
    designation:'Developer',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue, nulla vitae dictum dictum,',
  },
  {
    id: 8,
    Image: require('../Assets/team8.jpg'),
    fbLink:'https://www.facebaook.com',
    twitterLink:'https://www.twitter.com',
    linkdinLink:'https://www.linkdin.com',
    name:'Cynthia Ngozi',
    designation:'Developer',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue, nulla vitae dictum dictum,',
  },
]
const Teams = () => {
  return (
    <section id="teams" className='block teams-block'>
      <Container fluid>
        <div className='title-holder'>
          <h2>Our teams</h2>
          <div className='subtitle'>some of our experts</div>
        </div>
        <Row >
        {
          teamData.map(teams =>{

            return(
              <Col sm={3} key={teams.id}>
              <div className='image'>
                <Image src={teams.Image}/>
                <div className='overlay'>
                  <div className='socials'>
                    <ul>
                      <li><a href={teams.fbLink}><i class='fab fa-facebook-f'></i></a></li>
                      <li><a href={teams.twitterLink}><i class="fab fa-x-twitter"></i></a></li>
                      <li><a href={teams.linkdinLink}><i class="fab fa-linkedin-in"></i></a></li>
  
                    </ul>
                  </div>
                </div>
              </div>
              <div className='content'>
              <h3>{teams.name}</h3>
              <span className='designation'>{teams.designation}</span>
              <p>{teams.description}</p>
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

export default Teams
