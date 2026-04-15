import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-overlay">
          <span>View Details</span>
        </div>
      </Link>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link to={`/product/${product.id}`} className="product-name-link">
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <p className="product-price">{product.price}</p>
        <div className="product-actions">
          <a 
            href={`https://wa.me/94770000000?text=Hi%20Weavoral,%20I%20want%20to%20order%20the%20${encodeURIComponent(product.name)}.%20Can%20I%20customize%20it?`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            Customize
          </a>
          <a 
            href={`https://wa.me/94770000000?text=Hi%20Weavoral,%20I%20want%20to%20order%20the%20${encodeURIComponent(product.name)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm icon-btn"
            aria-label="Order Now"
          >
            <ShoppingBag size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
