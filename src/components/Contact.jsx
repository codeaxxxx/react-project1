import React from 'react'
import "./Styles/ServicesPage.css"



const Contact = () => {
  return (
    <div className="container-lg p-3">
        <p className="sub-text mt-5 mx-3 text-center">Welcome to Reve Esthetique! We're delighted to connect with you and provide a seamless way for you to reach out to us.</p>

      <div className="row justify-content-center">
        <div className="col-md-7 bg-yellow text-center rounded shadow">
          <p className="title-text text-light mt-5 mx-3 fw-bold">OUR LOCATION</p>
          <p className="text-center  para-text text-light px-3"> Here, you'll find our business location beautifully displayed on Google Maps, making it easy for you to locate us. Feel free to explore the interactive map to plan your visit.</p>


          <div style={{ maxWidth: '100%' , padding: '20px' }}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14121.495530147722!2d120.56809119852747!3d15.218684812640076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396ed1349f1bd69%3A0x83000b268d9816a!2zUsOqdmUgRXN0aMOpdGlxdWU!5e0!3m2!1sen!2sph!4v1705938238393!5m2!1sen!2sph"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '5px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
         


          <div className="text-center mx-3 mb-5">
            <p className=" text-center  para-text text-light"> Stay connected with us on social media through the provided links, where we share the latest updates, promotions, and engaging content.</p>
            <div className="justify-content-center px-3">

              <a href="https://www.instagram.com/reve_esthetique/" id="links" class="text-light text-decoration-none para-text text-center my-2 light-bg rounded-pill py-1 d-block" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-instagram text-light me-2 " style={{ fontSize: '1rem' }}></i>@reve_esthetique
              </a>
           
           
              <a href="https://www.facebook.com/reve.esthetique.MMXXIII" id="links" class="text-light text-decoration-none para-text text-center my-2 light-bg rounded-pill py-1 d-block" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-facebook me-2 " style={{ fontSize: '1rem' }}></i>Rêve Esthétique
              </a>
           
            
              <a href="https://www.tiktok.com/@reve_esthetique" id="links"class="text-light text-decoration-none para-text text-center my-2 light-bg rounded-pill py-1 d-block" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-tiktok me-2" style={{ fontSize: '1rem' }}></i>@reve_esthetique
              </a>
            
          </div>

          </div>

        </div>
        <div className="col-md-5 light-bg px-3 rounded shadow">
        <p className="title-text text-center mt-5 mx-3 fw-bold">CONTACT US</p>
        <p className="text-center fw-bol  para-text"> If you have any inquiries or would like to send us a message, our contact form is at your service.</p>
        <form className="mt-4" action="https://api.web3forms.com/submit" method="POST" >
            <input type="hidden" name="access_key" value="a8f24981-257f-4415-b977-ac4ac4159eca"/>
            <div className="mb-3">
              <label htmlFor="name" className="form-label para-text">Name</label>
              <input type="text" className="form-control para-text" name="name" placeholder="Your Name" required/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label para-text">Email address</label>
              <input type="email" className="form-control para-text" name="email" placeholder="name@example.com" required />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label para-text">Contact Number</label>
              <input type="tel" className="form-control para-text" name="phone" placeholder="123-456-7890" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label para-text">Message</label>
              <textarea className="form-control para-text" name="message" rows="4" placeholder="Your message" required></textarea>
            </div>
            <button type="submit" id="links" className="button-submit text-light para-text px-3 py-2 mb-5">Send</button>
          </form>

        </div>
      </div>
      
    </div>
  );
};

export default Contact
