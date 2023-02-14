import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import twitter from "../assets/img/twitter.png";
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import Logo from "../assets/img/developer.png";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }





    return(
      <Router>
        <Navbar bg="" expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="/">
       
        <img src={Logo} alt="Logo"></img><em><b> Josephine.</b></em>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"className={activeLink==='skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"className={activeLink==='projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/wangare-irungu-2059741b4"><img src={navIcon1} alt=""/></a>
                <a href="https://twitter.com/jossie_wangare?t=hOuUB0p4eRL2DoXQ7tEDUQ&s=03"><img src={twitter} alt=""/></a> 
                <a href="https://instagram.com/wangare_irungu_?igshid=ZDdkNTZiNTM= "><img src={navIcon3} alt=""/></a>

            </div>
           
            <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
   

    )
};