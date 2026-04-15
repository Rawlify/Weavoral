import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './CustomOrder.css';

const CustomOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productType: 'Bedsheet',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `Hi Weavoral, I'd like to place a custom order.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Product Type:* ${formData.productType}%0A*Details:* ${formData.description}`;
    
    window.open(`https://wa.me/94770000000?text=${message}`, '_blank');
  };

  return (
    <div className="custom-order-page fade-in">
      <div className="page-header text-center">
        <div className="container">
          <h1>Custom Orders</h1>
          <p>Design your perfect home decor piece. Tell us what you envision, and we'll craft it for you.</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="custom-order-container">
          <div className="form-wrapper">
            <h2>Request a Custom Design</h2>
            <p className="form-subtitle">Fill out the details below, and we'll finalize your order via WhatsApp.</p>
            
            <form onSubmit={handleSubmit} className="custom-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  placeholder="e.g. +94 77 123 4567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="productType">Product Type</label>
                <select 
                  id="productType" 
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                >
                  <option value="Bedsheet">Bedsheet</option>
                  <option value="Door Mat">Door Mat</option>
                  <option value="Pillow Cover">Pillow Cover</option>
                  <option value="Eco Mat">Eco Mat (Ekel)</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description">Design Details & Dimensions</label>
                <textarea 
                  id="description" 
                  name="description" 
                  rows="4" 
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Please describe colors, patterns, specific sizes, etc."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-large w-100">
                <Send size={18} /> Send to WhatsApp
              </button>
            </form>
          </div>
          
          <div className="custom-info">
            <div className="info-card">
              <h3>How it works</h3>
              <ul className="steps-list">
                <li>
                  <span className="step-num">1</span>
                  <div>
                    <strong>Submit your request</strong>
                    <p>Fill out the form with your desired specifications.</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">2</span>
                  <div>
                    <strong>Consultation</strong>
                    <p>We'll discuss materials, pricing, and timeline via WhatsApp.</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">3</span>
                  <div>
                    <strong>Crafting</strong>
                    <p>Our artisans begin handcrafting your unique piece.</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">4</span>
                  <div>
                    <strong>Delivery</strong>
                    <p>Your custom order is delivered right to your doorstep.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOrder;
