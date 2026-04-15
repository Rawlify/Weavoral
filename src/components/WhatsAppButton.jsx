import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = ({ productName }) => {
  const phoneNumber = "94770000000"; // Placeholder for Sri Lankan number
  const message = productName 
    ? `Hi Weavoral, I'm interested in ordering the ${productName}. Can I customize it?`
    : "Hi Weavoral, I'm interested in your products. Can you share more details?";
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="tooltip">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
