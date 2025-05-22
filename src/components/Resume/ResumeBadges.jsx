import React from "react";
import Badge from 'react-bootstrap/Badge';
import { GiLargePaintBrush } from "react-icons/gi";
import { FaHandHoldingDroplet } from "react-icons/fa6";
import { TbRazorElectric } from "react-icons/tb";
import { TbMassage } from "react-icons/tb";
import { RiSyringeFill } from "react-icons/ri";
import { BsSunglasses } from "react-icons/bs";
import { GiSyringe } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import { GiFootprint } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";


export default function ResumePage() {
  return (

<>
    
<Badge
  className="bg-danger-subtle border border-danger border-2"
  style={{
    marginRight: '3px',
    minWidth: '68px',
    display: 'inline-block', // ensures width takes effect
    textAlign: 'center'      // optional: centers the text
  }}
>
                      <span>
                           < TbRazorElectric className="text-danger fw-bold" style={{fontSize: "10px"}}/> 
                      </span>
                       <span style={{ fontSize: "9px", fontFamily:'Roboto', marginLeft:'3px' }} className="text-danger fw-bold">  
                       Barber
                      </span>
                      </Badge>

                      <Badge className="bg-info-subtle border border-info border-2" 
                       style={{
                        marginRight: '3px',
                        minWidth: '68px',
                        display: 'inline-block', // ensures width takes effect
                        textAlign: 'center'      // optional: centers the text
                      }}
                      >
             
                       <span style={{ fontSize: "9px", fontFamily:'Roboto', marginLeft:'3px' }} className="text-info fw-bold">  
                        Stylist
                      </span>
                      </Badge>
                      
                      <Badge className="bg-warning-subtle border border-warning border-2" 
                        style={{
                          marginRight: '3px',
                          minWidth: '68px',
                          display: 'inline-block', // ensures width takes effect
                          textAlign: 'center'      // optional: centers the text
                        }}
                      >
                      <span>
                           <FaHandHoldingDroplet className="text-warning fw-bold" style={{fontSize: "10px"}}/> 
                      </span>
                       <span style={{ fontSize: "9px", fontFamily:'Roboto', marginLeft:'3px' }} className="text-warning fw-bold">  
                     Manicure
                      </span>
                      </Badge>

                      <Badge className="bg-primary-subtle border border-primary border-2" 
                               style={{
                                marginRight: '3px',
                                minWidth: '68px',
                                display: 'inline-block', // ensures width takes effect
                                textAlign: 'center'      // optional: centers the text
                              }}
                      >
                      <span>
                           <GiLargePaintBrush className="text-primary fw-bold" style={{fontSize: "10px"}}/> 
                      </span>
                       <span style={{ fontSize: "9px", fontFamily:'Roboto', marginLeft:'3px' }} className="text-primary fw-bold">  
                       Color
                      </span>
                      </Badge>

                      <Badge className="bg-secondary-subtle border border-secondary border-2" 
                               style={{
                                marginRight: '3px',
                                minWidth: '68px',
                                display: 'inline-block', // ensures width takes effect
                                textAlign: 'center'      // optional: centers the text
                              }}
                              >
                      <span>
                           <TbMassage className="text-secondary fw-bold" style={{fontSize: "10px"}}/> 
                      </span>
                       <span style={{ fontSize: "9px", fontFamily:'Roboto', marginLeft:'3px' }} className="text-secondary fw-bold">  
                     Massage
                      </span>
                      </Badge>

                      <Badge className="bg-success-subtle bg border border-success border-2"
                               style={{
                                marginRight: '3px',
                                minWidth: '68px',
                                display: 'inline-block', // ensures width takes effect
                                textAlign: 'center'      // optional: centers the text
                              }}
                              >
                      <span>
                           <GiFootprint className="text-success fw-bold" style={{fontSize: "10px"}}/> 
                      </span>
                       <span style={{ fontSize: "9px", fontFamily:'Roboto', marginLeft:'3px' }} className="text-success fw-bold">  
                      Pedicure
                      </span>
                      </Badge>
                      <Badge className="bg-light bg border border-black border-2"          
                      style={{
                          marginRight: '3px',
                          minWidth: '68px',
                          display: 'inline-block', // ensures width takes effect
                          textAlign: 'center'      // optional: centers the text
                        }}>
                      <span> 
                           <FaSwimmingPool className="text-black fw-bold" style={{fontSize: "10px"}}/> 
                      </span>
                       <span style={{ fontSize: "9px", fontFamily:'Roboto', marginLeft:'3px' }} className="text-black fw-bold">  
                    Spa Tech
                      </span>
                      </Badge>

                      
                      <Badge className="badge-purple-light"          
                      style={{
                          marginRight: '3px',
                          minWidth: '68px',
                          display: 'inline-block', // ensures width takes effect
                          textAlign: 'center'      // optional: centers the text
                        }}>
<style>
  {`
  .badge-purple-light {
  background-color: #f1d8fc !important;
  border: 2px solid #8e44ad;
  color: #8e44ad;
}
`}
</style>
                      <span>
                           <BsSunglasses className="fw-bold" style={{fontSize: "11px", color:' #8e44ad'}}/> 
                      </span>
                       <span style={{ fontSize: "9px",  color:' #8e44ad' , fontFamily:'Roboto', marginLeft:'3px' }} className=" fw-bold">  
                      Laser
                      </span>
                      </Badge>

                      <Badge className="badge-orange-light"          
                      style={{
                          marginRight: '3px',
                          minWidth: '68px',
                          display: 'inline-block', // ensures width takes effect
                          textAlign: 'center'      // optional: centers the text
                        }}>
<style>
  {`
  .badge-orange-light {
  background-color:#fbcec0 !important;
  border: 2px solid #f83a00;
  color:rgb(255, 226, 218) ;
}
`}
</style>
                      <span>
                           <RiSyringeFill className=" fw-bold" style={{fontSize: "10px", color:' #f83a00'}}/> 
                      </span>
                       <span style={{ fontSize: "9px",  color:' #f83a00' , fontFamily:'Roboto', marginLeft:'3px' }} className=" fw-bold">  
                    Fillers
                      </span>
                      </Badge>

                      <Badge className="badge-pink-light" 
                               style={{
                                marginRight: '3px',
                                minWidth: '68px',
                                display: 'inline-block', // ensures width takes effect
                                textAlign: 'center'      // optional: centers the text
                              }}
                      >
<style>
  {`
  .badge-pink-light {
  background-color:#fbcec0 !important;
  border: 2px solid #ff0080;
  color:rgb(253, 180, 229) ;
}
`}
</style>
                      <span>
                           <GiSyringe className=" fw-bold" style={{fontSize: "9px", color:' #ff0080'}}/> 
                      </span>
                       <span style={{ fontSize: "9px",  color:' #ff0080' , fontFamily:'Roboto', marginLeft:'3px' }} className=" fw-bold">  
                       Botox
                      </span>
                      </Badge>
                      </>
 
  );
}
