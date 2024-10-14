import React from "react";
import { FaWhatsapp } from "react-icons/fa";


const WhatsAppLink = () => {
    const phoneNumber = '+2347019040834'; // Your phone number
    const message = 'Hello, I would like to know more!';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (

        <div className="fixed top-[50%] right-2 text-center flex justify-center flex-col items-center">

  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={60} color="#128C7E" />
        </a>
        <p>Let's Chat</p>
        </div>
      
    );
};

export default WhatsAppLink;
