import { Col, Container, Row, Tab,Nav } from "react-bootstrap";
import {ProjectCard} from "./ProjectsCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg3 from "../assets/img/project-img3.png";
export const Projects=()=>
{
    const projects=[
     {
        title:"business startup",
        description: "design & development",
        imgUrl: projImg3,
     },
     {
        title:"business startup",
        description: "design & development",
        imgUrl: projImg3,
     },
     {
        title:"business startup",
        description: "design & development",
        imgUrl: projImg3,
     },
    

  ];
    return(
     <section className="project" id=" projects">
        <Container>
            <Row>  
                <Col>
                <h2>Projects</h2>
                <p>
                I am a graduate of Bachelor's degree information technology.Specialized in netwoking,cybersecurity-CISCO certified and software development skilled in PHP and React
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link eventKey="second">Tab two</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link eventKey="third">Tab three</Nav.Link>
                  </Nav.Item>
               </Nav>
               <Tab.Content>
                  <Tab.Pane eventKey="first">
                     <Row>
                        {
                           projects.map((project, index)=>{
                              return(
                                 <ProjectCard
                                 key={index}
                                 {...project}/>
                              )
                           }
                           )
                        }
                     </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">web development</Tab.Pane>
                  <Tab.Pane eventKey="third">web development</Tab.Pane>
               </Tab.Content>
              </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
     </section>
    )
}
