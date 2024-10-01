import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>E-commerce website dedicated to selling a diverse range of products. The website serves as a digital marketplace, connecting businesses with consumers in an online environment. We will create the Home page where we will display the trending products, offer banner, newsletter subscription form, then we will make product page for men's category, women's category and kids category.</p>
        </div>    
    </div>
  )
}

export default DescriptionBox