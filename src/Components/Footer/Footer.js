import React, { Component } from 'react';
import './Footer.css';

class FooterC extends Component {
  render() {
    return (
      <div className="footer-sticky-area">
        <footer className="footer-p text-center shadow ">
          <p>Vania Ramírez A. 2018.</p>
        </footer>
      </div>
    );
  }
}

export default FooterC;

/*

 <footer className="footer-style">
          <h3 className="subtitle footer-txt">Send me an email</h3>
          <button className="footer-btn" href="mailto:vaniusha.ra@gmail.com">
            <i class="far fa-envelope fa-5x" />
          </button>
        </footer>
        */
