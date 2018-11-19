import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <footer className="footer-style">
          <h3 className="subtitle footer-txt">Send me an email!</h3>
          <button className="footer-btn">
            <a
              className="ancor-footer"
              href="mailto:vaniusha.ra@gmail.com.com?Subject=Hello%20again"
            >
              <i className="fas fa-envelope-open-text fa-3x" />
            </a>
          </button>
        </footer>
      </div>
    );
  }
}
export default Contact;
