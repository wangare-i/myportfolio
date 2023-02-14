

import React, {useState} from 'react';
//import './Form.css';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/lightenning.png";
//import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';


export const Contact = () =>{

    const [form, setForm] = useState({
        firstName: "",
        lasttName: "",
        phone: "",
        email: "",
        message:"",
        
    })

    const [count, setCount] = useState(1)

    const updateForm = (e) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value,
        })
        console.log(e.target)
        console.log(form)
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_54ul7w7', 
            'template_djgqjbo', 
            e.target,
            'Y02dRkp4CW0SmmFQUa'
        )
          .then((result) => {
              console.log(
                  result
                  );
          }, (error) => {
              console.log(error);
          });
        e.target.reset();
    }



    return (
      
        <section className="contact" id="connect">
          <Container>
            <Row className="align-items-center">
              <Col size={12} md={6}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                  }
                </TrackVisibility>
              </Col>
              <Col size={12} md={6}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={sendEmail}>
                      
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input type="text" onChange={updateForm
                          } placeholder=" FirstName" 
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="text" onChange={updateForm
                          } placeholder="Last Name"  />
                          
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="email" onChange={updateForm
                          }  placeholder="Email Address"/>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="tel" onChange={updateForm
                          }placeholder="Phone No." 
                          />
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea rows="6"  placeholder="Message" >
                          </textarea>
                          <button type="submit"><span>Submit</span></button>
                          </Col>
                   
                      </Row>
                    </form>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
    }
        

/*import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/lightenning.png";
//import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';

const Result=() =>{
  return(
      <p>Your message has been sent!</p>
  )
}
export const Contact = (props) => {
  const [result,showResult] = useState(false);
 
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_54ul7w7', 'template_djgqjbo', e.target, 'Y02dRkp4CW0SmmFQUa')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit="">
                  
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="First Name" 
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Last Name" />
                      
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"  placeholder="Email Address" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No."
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  placeholder="Message">
                      </textarea>
                      <button type="submit"><span>Submit</span></button>
                      </Col>
               
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

*/


/*import React from "react";
import { useState } from "react";
import { Row ,Col} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';

const Result=() =>{
    return(
        <p>Your message has been sent!</p>
    )
}
export const Contact = (props) => {
    const [result,showResult] = useState(false);
   
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_54ul7w7', 'template_djgqjbo', e.target, 'Y02dRkp4CW0SmmFQUa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            showResult(true);
        };
    
        
  return (
    <section className="contact" id="connect">
    <container>
        <Row>
            <Col md={6}>
                <img src={contactImg} alt="Contact Us"/>
            </Col>
            <Col md={6}>
                <h2>Get In Touch</h2>
                <form>
                    <Row>
                        <Col sm={6} className="px-1">
                          <input type="text" value="firstName" placeholder="First Name"> </input>
                        </Col>
                        <Col sm={6} className="px-1">
                          <input type="text" value="lastName" placeholder="Last Name"></input>
                        </Col>
                        <Col sm={6} className="px-1">
                          <input type="email" value="email"placeholder="Email Address"></input>
                        </Col>
                        <Col sm={6} className="px-1">
                          <input type="tel" value="phone" placeholder="Phone No."></input>
                        </Col>
                        <Col>
                        <textarea rows="6" value="message" placeholder="Message"></textarea>
                        <button type="submit"><span>SUBMIT</span></button>
                        </Col>
                        {
                            
                            <Col>
                            <div className="row">{
                                result ? <Result/>:null


                                                                
                                }</div>
                            </Col>
                        }
                    </Row>
                </form>
            </Col>
        </Row>
    </container>
</section>);
};
    
     
       const formInitialDetails = {
            firstName:'',
            lastName:'',
            email:'',
            phone:'',
            message:'',

        }
        const [ formDetails, setFormDetails]= useState(formInitialDetails)
        const [buttonText, setButtonText] =useState('Send');
        const[status, setStatus] =useState({});
        const onFormUpdate =(category,value)=>{
        setFormDetails({
            ...formDetails,
            [category]:value
          })
         }
       
         const handleSubmit = async(e) =>{
            e.preventDefault();
            setButtonText('sending..');
            let response =await fetch("http://localhost:5000/contact",
            {
                method: "POST",
                headers:{
                    "content-type": "Application/json;charset=utf-8",
                },
                body:JSON.stringify(formDetails),

            });
            setButtonText("send");
            let result =response.json();
            setFormDetails(formInitialDetails);
            if(result.code ===200){
                setStatus({ success: true, message: 'message sent!'});
            }else{
                setStatus({success:false, message:'something went wrong, try again later.'})
            }
            

         };
        return ( 
            <section className="contact" id="connect">
                <container>
                    <Row>
                        <Col md={6}>
                            <img src={contactImg} alt="Conatct Us"/>
                        </Col>
                        <Col md={6}>
                            <h2>Get In Touch</h2>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col sm={6} className="px-1">
                                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName',e.target.value)}/>
                                    </Col>
                                    <Col sm={6} className="px-1">
                                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName',e.target.value)}/>
                                    </Col>
                                    <Col sm={6} className="px-1">
                                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email',e.target.value)}/>
                                    </Col>
                                    <Col sm={6} className="px-1">
                                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone',e.target.value)}/>
                                    </Col>
                                    <Col>
                                    <textarea rows="6" value={formDetails.message} placeholder="Message"onChange={(e) => onFormUpdate('message',e.target.value)}/>
                                    <button type="submit"><span>{buttonText}</span></button>
                                    </Col>
                                    {
                                        status.message &&
                                        <Col>
                                        <p className={status.success ===false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                    }
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </container>
            </section>
     );
}
 */
 