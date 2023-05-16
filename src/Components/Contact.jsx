import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vuwtte9', 'template_t4eyvqj', form.current, 'r-Gvk4GgvMcfkmqLp')
      .then((result) => {
          console.log(result.text);
          setEmailSent(true);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="contact">
      <h1>Contact</h1>
      <h2>- get in touch -</h2>
      <div className="contact-form">
        {emailSent ? (
          <p className="email-sent">Email Sent!</p>
        ) : (
          <form className="contact-form-input" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              id="name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="johnDoe@gmail.com"
              id="email"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject:"
              id="subject"
              required
            />
            <textarea
              name="message"
              placeholder="Enter message here..."
              type="text"
              id="textarea"
              required
            />
            <button className="contact-submit" type="submit" value="send"><i className="fa-regular fa-envelope"></i></button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
