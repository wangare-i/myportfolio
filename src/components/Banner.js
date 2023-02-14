
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/heade.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';


export const Banner=() => {
  
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome To My Portfolio</span>
                        <h5>{'Hi i am Josephine, '}<span className="wrap"> a web developer</span>
                        </h5>
                        <p>A graduate in Computing,information technology and Information systems.Specialized in netwoking,cybersecurity-CISCO certified and software development skilled in PHP and React</p>
                        <button onClick={() => console.log('connect')}>Let’s connect<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" 
                         ></img>
                    </Col>

                </Row>
            </Container>

        </section>
    )

} 
/*
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/heade.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
           
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi i am Josephine,`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "Cybersecurity" ]'><span className="wrap">{text}</span></span></h1>
                <p>I am a graduate of Bachelor's degree information technology.Specialized in netwoking,cybersecurity CISCO certified  and software development skilled in PHP and React</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
           
            
          </Col>
          <Col xs={12} md={6} xl={5}>
        
              
                  <img src={headerImg} alt="Header Img"/>
              
          </Col>
        </Row>
      </Container>
    </section>
  )
}
*/