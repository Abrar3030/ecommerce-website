import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>This is our premium, top-of-the-line widget. Crafted with meticulous attention
          to detail, it offers unparalleled performance and style. The sleek design is matched
          by its superior functionality, making it a must-have for any enthusiast. With its
          robust construction and cutting-edge features, this widget is designed to enhance
          your productivity and elevate your user experience. It's not just a widget, it's a 
          game-changer. Experience the difference today with our premium widget. Limited stock 
          available, so grab yours now!</p>
        <p>Introducing our latest innovation in tech gadgets. This device is not just a tool; 
           it's your new partner in productivity. With its advanced features and user-friendly 
           interface, it's designed to streamline your workflow and make your life easier. Its 
           compact design makes it portable and convenient, while its powerful performance ensures 
           it can handle any task you throw at it. Don't settle for less; upgrade your tech game with 
           our new device. Hurry, stocks are limited!</p>
      </div>
    </div>
  );
}

export default DescriptionBox;
