import React from "react";

const currentDate = new Date();
const year = currentDate.getFullYear();

function Footer() {
  return (
    <div className='footer'>
      <p id='footer-text'>Created by Matthew Robinson &copy; {year}</p>
    </div>
  );
}

export default Footer;
