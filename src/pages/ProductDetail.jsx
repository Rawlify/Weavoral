import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Paintbrush } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Placeholder data finding logic
  const allProducts = [
    { 
      id: 1, 
      name: "Handwoven Patterned Door Mat", 
      price: "600 LKR + Delivery", 
      image: `${import.meta.env.BASE_URL}assets/door-mat-1.jpg`, 
      category: "Door Mats",
      description: "A beautifully handwoven floor mat featuring intricate circular patterns in warm hues. Made with durable recylced cloth materials, perfect for adding a touch of rustic charm to your doorstep.",
      material: "Upcycled Cotton/Cloth",
      sizes: ["Standard Round"]
    },
    { 
      id: 2, 
      name: "Classic Round Door Mat", 
      price: "600 LKR + Delivery", 
      image: `${import.meta.env.BASE_URL}assets/door-mat-2.jpg`, 
      category: "Door Mats",
      description: "A tightly woven round door mat with striking contrast rings. Handcrafted for maximum durability and water absorbency. Excellent for entryways.",
      material: "Upcycled Cotton/Cloth",
      sizes: ["Standard Round"]
    },
    { 
      id: 3, 
      name: "Checkered Cotton Bedding Set", 
      price: "3,000 LKR", 
      image: `${import.meta.env.BASE_URL}assets/bedding-1.jpg`, 
      category: "Bedsheets",
      description: "Premium 100% pure cotton bedding set featuring an elegant, classic checkered pattern. Designed for superior comfort and breathability. Includes 1 flat bed sheet and 2 matching pillow covers.",
      material: "100% Pure Cotton",
      sizes: ["90x90 inches"]
    },
    { 
      id: 4, 
      name: "Pastel Block Print Bedding Set", 
      price: "3,000 LKR", 
      image: `${import.meta.env.BASE_URL}assets/bedding-2.jpg`, 
      category: "Bedsheets",
      description: "Experience serene sleep with our premium 100% pure cotton bedding set. Features a soothing pastel block-style pattern. Includes 1 flat bed sheet and 2 matching pillow covers.",
      material: "100% Pure Cotton",
      sizes: ["90x90 inches"]
    },
    { 
      id: 5, 
      name: "Premium Cotton Bedding Set", 
      price: "3,000 LKR", 
      image: `${import.meta.env.BASE_URL}assets/hero-bedding.png`, 
      category: "Bedsheets",
      description: "Experience the ultimate comfort with our handcrafted 100% pure cotton bedding set. Features a beautiful brown and beige grid pattern. Includes 1 flat bed sheet and 2 pillow covers.",
      material: "100% Pure Cotton",
      sizes: ["90x90 inches", "72x90 inches"]
    },
    { 
      id: 6, 
      name: "Traditional Ekel Mat", 
      price: "4,500 LKR", 
      image: `${import.meta.env.BASE_URL}assets/eco-mats.png`, 
      category: "Eco Mats",
      description: "Bring the authentic Sri Lankan touch to your home with this traditional coconut leaf (Ekel) mat. Highly durable, easy to clean, and perfectly suited for both indoor and outdoor use.",
      material: "Coconut Leaf (Ekel)",
      sizes: ["Large (6x4 ft)", "Medium (4x3 ft)"]
    }
  ];

  const product = allProducts.find(p => p.id === parseInt(id)) || allProducts[0];
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="product-detail-page fade-in">
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
        <Link to="/products" className="back-link">
          <ArrowLeft size={18} /> Back to Products
        </Link>
        
        <div className="detail-grid">
          <div className="detail-image-box">
            <img src={product.image} alt={product.name} className="main-image" />
          </div>
          
          <div className="detail-info">
            <span className="product-category detail-category">{product.category}</span>
            <h1 className="detail-title">{product.name}</h1>
            <p className="detail-price">{product.price}</p>
            
            <div className="detail-description">
              <p>{product.description}</p>
            </div>
            
            <div className="detail-meta">
              <p><strong>Material:</strong> {product.material}</p>
            </div>
            
            <div className="customization-section">
              <h4>Available Sizes</h4>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="action-buttons">
              <a 
                href={`https://wa.me/94770000000?text=Hi%20Weavoral,%20I%20want%20to%20order%20the%20${encodeURIComponent(product.name)}%20(Size:%20${encodeURIComponent(selectedSize)}).`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large w-100 mb-3"
              >
                <ShoppingBag size={20} /> Order via WhatsApp
              </a>
              <Link to="/custom-order" className="btn btn-outline btn-large w-100">
                <Paintbrush size={20} /> Request Custom Design
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
