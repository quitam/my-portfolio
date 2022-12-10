import React from 'react';
import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import ProjcetCard from '../ProjectCard';
import projImg1 from '../../assets/img/project-img1.png';
import projImg2 from '../../assets/img/project-img2.png';
import projImg3 from '../../assets/img/project-img3.png';
import colorSharp2 from '../../assets/img/color-sharp2.png';

import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg1,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg2,
        },
        {
            title: 'Business Startup',
            description: 'Design & Development',
            imgUrl: projImg3,
        },
    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, quod delectus. Iure
                            exercitationem debitis accusamus sed nemo. Obcaecati mollitia est magnam totam ea explicabo
                            cum molestias. Alias quae minus voluptates.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav
                                variant="pills"
                                className="nav-pills mb-3 justify-content-center align-items-center"
                                id="pills-tab"
                            >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return <ProjcetCard key={index} {...project} />;
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
                                <Tab.Pane eventKey="third">Tab 3 content</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} alt="background" className="background-image-right" />
        </section>
    );
};

export default Projects;
