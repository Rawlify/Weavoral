import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Truck, CheckCircle } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Handwoven Patterned Door Mat",
      price: "600 LKR + Delivery",
      image: `${import.meta.env.BASE_URL}assets/door-mat-1.jpg`,
      category: "Door Mats"
    },
    {
      id: 2,
      name: "Classic Round Door Mat",
      price: "600 LKR + Delivery",
      image: `${import.meta.env.BASE_URL}assets/door-mat-2.jpg`,
      category: "Door Mats"
    },
    {
      id: 3,
      name: "Checkered Cotton Bedding Set",
      price: "3,000 LKR",
      image: `${import.meta.env.BASE_URL}assets/bedding-1.jpg`,
      category: "Bedsheets"
    },
    {
      id: 4,
      name: "Pastel Block Print Bedding Set",
      price: "3,000 LKR",
      image: `${import.meta.env.BASE_URL}assets/bedding-2.jpg`,
      category: "Bedsheets"
    }
  ];

  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src={`${import.meta.env.BASE_URL}assets/hero-bedding.png`} alt="Premium Bedding Set" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container position-relative z-10">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Discover Pure Comfort</h1>
            <p className="tagline">Weaving comfort into your everyday living with handcrafted, eco-friendly home decor.</p>
            <div className="hero-cta">
              <Link to="/products" className="btn btn-primary">
                Explore Products <ArrowRight size={18} />
              </Link>
              <Link to="/custom-order" className="btn btn-outline text-white">
                Pre-Order Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={`${import.meta.env.BASE_URL}assets/woven-mats.png`} alt="Handcrafted Mats" className="rounded-image" />
            </motion.div>
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="subtitle">Our Story</span>
              <h2>Authentic Sri Lankan Craftsmanship</h2>
              <p>At Weavoral, we believe in the beauty of handmade creations. Each piece in our collection is thoughtfully crafted by skilled artisans, combining traditional techniques with contemporary design.</p>
              <p>From our 100% pure cotton bedding sets to our sustainable coconut leaf mats, we bring warmth, texture, and sustainable luxury into your home.</p>
              <Link to="/contact" className="btn btn-outline" style={{ marginTop: '1rem' }}>Get in Touch</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">Trending Now</span>
            <h2>Featured Collection</h2>
            <p>Discover our most loved handcrafted pieces</p>
          </div>
          
          <div className="product-grid">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <Link to="/products" className="btn btn-outline">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="custom-order-cta">
        <div className="container container-sm">
          <motion.div 
            className="cta-box text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Design Your Own Mat or Bedsheet</h2>
            <p>Looking for a specific size, color, or pattern? We accept custom orders to perfectly match your home decor.</p>
            <a 
              href="https://wa.me/94770000000?text=Hi%20Weavoral,%20I'm%20interested%20in%20a%20custom%20order." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-large mt-2"
            >
              Request Custom Design via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Choose Weavoral?</h2>
          </div>
          <div className="features-grid">
            <motion.div className="feature-item" whileHover={{ y: -5 }}>
              <div className="feature-icon"><Heart size={32} /></div>
              <h3>Handmade with Care</h3>
              <p>Every item is uniquely crafted by skilled artisans.</p>
            </motion.div>
            <motion.div className="feature-item" whileHover={{ y: -5 }}>
              <div className="feature-icon"><Leaf size={32} /></div>
              <h3>Eco-Friendly Materials</h3>
              <p>Sustainable natural fibers and 100% pure cotton.</p>
            </motion.div>
            <motion.div className="feature-item" whileHover={{ y: -5 }}>
              <div className="feature-icon"><CheckCircle size={32} /></div>
              <h3>Custom Designs</h3>
              <p>Tailored to fit your exact specifications and style.</p>
            </motion.div>
            <motion.div className="feature-item" whileHover={{ y: -5 }}>
              <div className="feature-icon"><Truck size={32} /></div>
              <h3>Island-Wide Delivery</h3>
              <p>Special delivery options available for Colombo area.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
