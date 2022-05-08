import React from 'react'
import './Contact.css'
import { Component } from 'react';
import Contact from './Contact2';

class ParentContact extends Component {    
  render() {    
      return (        
          <div className='contact'>
          <Contact text="Email:  danielutibe07@gmail.com" />
          <Contact text="Github: https://github.com/danutibe07" />
          <h3>Contact us</h3>
          </div>    
      );  
  }
}
export default ParentContact