import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const ContactMe = () => {
    return(
        <Container fluid id='contact' style={{backgroundColor: "#040404", padding: "20px"}}>
            <h1 style={{width: "100%", textAlign: "center", marginBottom: "50px", marginTop: "20px", color: "#fff"}}>Contact Me</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Col sm={5} md={3} lg={2} style={{display: 'flex', justifyContent: 'center'}}>
                    <SocialIcon url='https://twitter.com/rrreeeeyyyy' />
                </Col>
                <Col sm={5} md={3} lg={2} style={{display: 'flex', justifyContent: 'center'}}>
                    <SocialIcon url='https://www.instagram.com/rrreeeeyyyy/' />
                </Col>
                <Col sm={5} md={3} lg={2} style={{display: 'flex', justifyContent: 'center'}}>
                    <SocialIcon url='https://facebook.com/reyviene7' />
                </Col>
                <Col sm={5} md={3} lg={2} style={{display: 'flex', justifyContent: 'center'}}>
                    <SocialIcon url='https://www.linkedin.com/in/rey-viene-dean-p-08a480134/' />
                </Col>
                <Col sm={5} md={3} lg={2} style={{display: 'flex', justifyContent: 'center'}}>
                    <SocialIcon url='https://github.com/reyviene7' fgColor="#dee2e6" />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactMe;