import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Placeholder data - in a real app this would come from an API/CMS
  const allProducts = [
    { id: 1, name: "Handwoven Patterned Door Mat", price: "600 LKR + Delivery", image: `${import.meta.env.BASE_URL}assets/door-mat-1.jpg`, category: "Door Mats" },
    { id: 2, name: "Classic Round Door Mat", price: "600 LKR + Delivery", image: `${import.meta.env.BASE_URL}assets/door-mat-2.jpg`, category: "Door Mats" },
    { id: 3, name: "Checkered Cotton Bedding Set", price: "3,000 LKR", image: `${import.meta.env.BASE_URL}assets/bedding-1.jpg`, category: "Bedsheets" },
    { id: 4, name: "Pastel Block Print Bedding Set", price: "3,000 LKR", image: `${import.meta.env.BASE_URL}assets/bedding-2.jpg`, category: "Bedsheets" },
    { id: 5, name: "Premium Cotton Bedding Set", price: "3,000 LKR", image: `${import.meta.env.BASE_URL}assets/hero-bedding.png`, category: "Bedsheets" },
    { id: 6, name: "Traditional Ekel Mat", price: "4,500 LKR", image: `${import.meta.env.BASE_URL}assets/eco-mats.png`, category: "Eco Mats" },
  ];

  const categories = ['All', 'Mats', 'Bedsheets', 'Pillow Covers', 'Door Mats', 'Eco Mats'];

  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="products-page fade-in">
      <div className="page-header">
        <div className="container text-center">
          <h1>Our Collection</h1>
          <p>Handcrafted with love, designed for your home.</p>
        </div>
      </div>

      <div className="container section-padding">
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div layout className="product-grid mt-4">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center mt-5">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
