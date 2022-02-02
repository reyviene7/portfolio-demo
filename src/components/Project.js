import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import world from "./svg/world.svg";
import file from "./svg/file.svg";
import slideshow from "./svg/slideshow.svg";

const Project = () => {
    return(
        <Container fluid id="projects" class="services" style={{backgroundColor: "#040404", padding: "20px"}}>
            <h1 class="section-title" style={{width: "100%", textAlign: "center", marginBottom: "50px", marginTop: "20px", color: "#fff"}}>Services</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
            <div class="icon"> <img src={world} /></div>
                            <Card.Title><h4>Web Development</h4> </Card.Title>
                            <Card.Text>
                            The process of building websites and applications for the internet, or for a private network known as an intranet.
                            </Card.Text>
                        
                    </div>
                    </div>
                   
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
            <div class="icon"><img src={file} /></div>
                            <Card.Title><h4>Data Analytics</h4> </Card.Title>
                            <Card.Text>
                            The techniques and processes of data analytics have been automated into mechanical processes and algorithms that work over raw data for human consumption.
                            </Card.Text>
                    </div>
                    </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
            <div class="icon"><img src={slideshow} /></div>
                            <Card.Title><h4>Web Design</h4> </Card.Title>
                            <Card.Text>
                            The process of planning, conceptualizing, and arranging content online.
                            </Card.Text>
                    </div>
                    </div>
            </Row>
        </Container>
    );
};

export default Project;