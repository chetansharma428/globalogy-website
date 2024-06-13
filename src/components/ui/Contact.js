import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div class="container-fluid bg-light">
        <div class="container" style={{height:"50vh"}}>
          <div class="display-4 text-center">Hero Section</div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact;
