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
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="email">
                Email
                <input id="email" name="email" type="email" className="form-control" />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="message">
                Ask us anything...
                <textarea id="message" name="message" className="form-control" />
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
