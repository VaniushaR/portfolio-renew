import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import './About-me.css';

class AboutMe extends Component {
  render() {
    return (
      <div className="write-area shadow">
        <Typing speed={15}>
          <h2 className="subtitle">Hi! I'm Vania</h2>
          <Typing.Delay ms={2000} />
          <section className="hand-writing">
            <span> I'm Front-End Developer </span>
            <span> and also I'm Linguist. </span> <br />
            <Typing.Delay ms={1000} />
            <span>I'm creative. </span>
            <span> I love programming!</span>
            <span> I really want to learn so much things!!!!!!!</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={6} />
            <span> I want to learn Natural Language Processing!</span> <br />
            <span> I have studied Linguistics at the FFyL-UNAM,</span> <br />
            <span>
              then I become interested in Computational Linguistics and I
              realized I have to learn programming, I met JavaScript in
              Laboratoria and I fell in love, now I'm learning Python also.
            </span>
            <br />
            <Typing.Delay ms={1500} />
            <span> I'm mexican,</span>
            <span> I speak Spanish, ...</span>
            <Typing.Backspace count={4} />
            <span> also I speak English, </span>
            <span> and a bit of Portuguese. ...</span>
            <Typing.Backspace count={4} />
            <span> "Oi gente, tudo bem! Muito prazer, de onde você é?"</span>
            <Typing.Delay ms={3000} />
            <Typing.Reset count={35} delay={200} />
            <span> Just kidding, ...</span>
            <span> I'm a nice and simply person.</span>
            <span> Love to talk and connecting with people.</span>
            <Typing.Delay ms={1000} />
            <span> My favourite animal is the wolf, what is yours?</span>
            <Typing.Delay ms={2000} />
          </section>
        </Typing>
      </div>
    );
  }
}
export default AboutMe;
