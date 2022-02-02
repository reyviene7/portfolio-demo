import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import me from '../images/me.jpg';

const About = () => {
    return(
        <Container fluid style={{height: "75vh"}} id="about">
            <h1 style={{width: "100%", textAlign: "center", margin: "20px 0"}}>Hi! 👋🏻 </h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "80%"}}>
                <Col sm={6} md={5} lg={{span: 4, offset: 1}}>
                    <img 
                        src={me} 
                        alt="Software Developer" 
                        style={{
                            width: "90%", 
                            boxShadow: "5px 5px 5px #001",
                            borderRadius: "20px"
                        }}
                    />
                </Col>
                <Col sm={9} md={10} lg={{ span: 5, offset: 1}}>
                    <h1>I'm Rey Viene Dean Pasiculan</h1>
                    <h4 
                        style={{fontWeight: "300",
                        textAlign: "justify",
                    
                    }}>
                        A student at Mindanao State of University - Iligan Institute of Technology, studying Computer science.
                        I love to code and I'm a passionate web developer from Philippines. 
                        A 20 year's old software engineer based in Iligan City, Philippines.
                    </h4>
                </Col>
            </Row>
        </Container>
    );
};

export default About;