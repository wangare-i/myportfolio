import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import twitter from "../assets/img/twitter.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
          <em><b>Josephine</b></em>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
           
                  <a href="https://www.linkedin.com/in/wangare-irungu-2059741b4"><img src={navIcon1} alt="Icon" /></a>

              <a href="https://twitter.com/jossie_wangare?t=hOuUB0p4eRL2DoXQ7tEDUQ&s=03"><img src={twitter} alt="Icon" /></a>
              <a href="https://instagram.com/wangare_irungu_?igshid=ZDdkNTZiNTM= "><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
