import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <footer className="footer-style">
          <h3 className="subtitle footer-txt">Send me an email</h3>
          <button className="footer-btn" href="mailto:vaniusha.ra@gmail.com">
            <i className="far fa-envelope fa-5x" />
          </button>
        </footer>
      </div>
    );
  }
}
export default Contact;
