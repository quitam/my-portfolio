import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Carousel from 'react-multi-carousel';
import meter1 from '../../assets/img/meter1.svg';
import meter2 from '../../assets/img/meter2.svg';
import meter3 from '../../assets/img/meter3.svg';
import colorSharp from '../../assets/img/color-sharp.png';

import './Skills.css';

import 'react-multi-carousel/lib/styles.css';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="skill-box">
                            <h2>Skills</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eos? Molestiae
                                laudantium alias quasi provident dicta ab iste magnam! Rerum, a quas? Animi ipsum
                                praesentium porro eveniet sed dolore nesciunt?
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Item-1" />
                                    <h5>HTML, CSS Basic</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Item-2" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Item-3" />
                                    <h5>ReactJS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Item-4" />
                                    <h5>Git</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="background" className="background-image-left" />
        </section>
    );
};

export default Skills;
