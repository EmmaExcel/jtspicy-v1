import React from 'react'
import footer from '../JTSpice.svg'
import './Footer.css'

const Footer = () => {
  return (
    <section className='footer-container'>
        <div className="underline"></div>
      <div className="footer-content">
       <div className='footer-mobile'>
       <div className="footer-logo">
            <img src={footer} alt="" />
        </div>
        <div className="footer-copyright">
            Copyright,JTSpice 2020
        </div>
       </div>
        <div className="footer-social-links">
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
    </section>
  )
}

export default Footer
