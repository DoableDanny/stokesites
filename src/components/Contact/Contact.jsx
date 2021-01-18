import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <form
            className="contact-form"
            action="https://formsubmit.co/47b18bd77788e64e48bcc3e00ef9332a"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="email">
                Your Email
                <input id="email" name="email" type="email" className="form-control" required />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="message">
                Ask us anything...
                <textarea id="message" name="message" className="form-control" required />
              </label>
            </div>
            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
