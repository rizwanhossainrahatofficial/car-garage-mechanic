import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
   const {serviceId }= useParams()
   const [service,setservice]=useState({})
   useEffect(()=>{
       fetch(`http://localhost:5000/services/${serviceId}`)
       .then(res=>res.json())
       .then(data=>setservice(data))
   },[])
    return (
        <div>
            <h1>service detail:{service.name}</h1>
            <h3>this is booking :{serviceId}</h3>
        </div>
    );
};

export default Booking;