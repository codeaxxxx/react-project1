import React from 'react'
import "./Styles/Footer.css"
const Footer = () => {
  return (
    <div className="footer ">
        <p className="title-text text-center text-light ">Follow Us on:</p>
        <div className="footer__links p-2 ">
        <a href="https://www.instagram.com/reve_esthetique/" className="footer__link para-text text-center text-light ">
        <i class="bi bi-instagram text-light me-2 " style={{ fontSize: '1rem' }}></i>@reve_esthetique
        </a>
        <a href="https://www.facebook.com/reve.esthetique.MMXXIII" className="footer__link para-text text-center text-light">
        <i class="bi bi-facebook me-2 " style={{ fontSize: '1rem' }}></i>Rêve Esthétique
        </a>
        <a href="https://www.tiktok.com/@reve_esthetique" className="footer__link para-text text-center text-light">
        <i class="bi bi-tiktok me-2" style={{ fontSize: '1rem' }}></i>@reve_esthetique
        </a>
      </div>
      <div className="gmail-div text-center para-text text-light mt-2">
        <i class="bi bi-envelope me-2"></i> reve.esthetique.ph@gmail.com
      </div>
    </div>
  )
}

export default Footer