import React from 'react'
import MainServices from '../Services/mainServices';
import Servicespro from '../Services/Servicespro';
import Servicesslider from '../Services/Servicesslider';
import FAQ from '../Services/FAQ';
import Client from '../Services/Client';
import Footer from '../../global/Footer'
function Servicespage() {
  return (
    <div>
      <MainServices />
      <Servicesslider />
      <Client />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Servicespage;
