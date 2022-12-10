import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsArrowRightCircle } from 'react-icons/bs';

import headerImg from '../../assets/img/header-img.svg';
import './Banner.css';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer', 'Frontend', 'ReactJS'];
    const [text, setText] = useState('');
    const period = 1000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => {
            clearInterval(ticker);
        };
    }, [text]);
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }
    };
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcom to my Portfolio</span>
                        <h1>
                            {`Hi I'm Qui Tam - `}
                            <span className="wrap">{text}</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eum fuga vero dicta
                            natus architecto voluptatem delectus, nihil cumque ab dolorum officia quaerat nulla mollitia
                            accusantium et atque veniam rem.
                        </p>
                        <button onClick={() => console.log('connect')}>
                            Let's connect <BsArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="IMG0001" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
