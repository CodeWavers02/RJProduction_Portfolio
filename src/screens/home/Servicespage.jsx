import React from 'react'
import MainServices from '../Services/mainServices';
import Servicespro from '../Services/Servicespro';
import Servicesslider from '../Services/Servicesslider';
function Servicespage() {
  return (
    <div>
      <MainServices />
      <Servicesslider />
      <Servicespro />
    </div>
  )
}

export default Servicespage;
