import React from 'react';
import "./Styles/ServicesPage.css";

const ServicesPage = () => {
  return (
    <div className="container-lg mb-5">
      <h1 className="sub-text text-center mt-5 fw-bold">RÊVE ESTHÉTIQUE</h1>
      <h4 className="title-text text-center mt-2">Services Menu</h4>  

      <iframe
        allowFullScreen="allowfullscreen"
        scrolling="no"
        className="fp-iframe "
        src="https://heyzine.com/flip-book/fc1efb94fe.html"
        style={{ border: "0px", width: "100%", height: "600px" }}
      ></iframe>
    </div>
  );
}

export default ServicesPage

