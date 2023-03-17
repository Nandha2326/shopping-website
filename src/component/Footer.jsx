import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-row'>
          <div className='footer-col'>
            <h4>About Us</h4>
            <p>We are a leading online retailer of fashion and lifestyle products, offering a wide range of high-quality products to customers around the world.</p>
          </div>
          <div className='footer-col'>
            <h4>Customer Service</h4>
            <ul>
              <li><Link to='/faq'>FAQs</Link></li>
              <li><Link to='/contact'>Contact Us</Link></li>
              <li><Link to='/shipping'>Shipping & Returns</Link></li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Connect with Us</h4>
            <ul>
              <li><Link to='https://www.facebook.com/' target='_blank'>Facebook</Link></li>
              <li><Link to='https://www.twitter.com/' target='_blank'>Twitter</Link></li>
              <li><Link to='https://www.instagram.com/' target='_blank'>Instagram</Link></li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>Subscribe to our Newsletter</h4>
            <p>Get updates about our latest products and promotions.</p>
            <form>
              <input type='email' placeholder='Enter your email address' />
              <button type='submit'>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2023 TRENDS COLLECTIONS. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
