import { useEffect, useState } from "react";
import { Navbar,Container } from "react-bootstrap";
import logo from'../assets/img/logo.svg';
import navIcon1 from'../assets/img/navIcon1';
import navIcon2 from'../assets/img/navIcon2';
import navIcon3 from'../assets/img/navIcon3';

export const NavBar = () => {
    const [activeLink, SetActiveLink]= useState('home');
    const [scrolled, SetScrolled]= useState(false);

    useEffect(()=> {
        const onscroll =() => {
            if (window, scrollY >50){
                SetScrolled(true);
            }else{
                SetScrolled(false);
            }
        }
        window.addEventListener("scroll",onscroll);
        return() => window.removeEventListener("scroll", onscroll);
    },[])
    const onUpdateActiveLink = (value )=>{
        SetActiveLink(value);
    } 

    return(
        <Navbar bg="light" expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={''} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"className={activeLink==='skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"className={activeLink==='projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Project</Nav.Link>
            
          </Nav>
          <span className="navbar-text">
            <div className="Social-icon">
                <a href="#"><img src={} alt=""/></a>
                <a href="#"><img src={} alt=""/></a> 
                <a href="#"><img src={} alt=""/></a>

            </div>
            <button className="vvd" onClick={() => console.log('connect')}></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    );
}