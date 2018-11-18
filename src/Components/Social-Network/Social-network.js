import React, { Component, Fragment } from 'react';
import posed from 'react-pose';
import SocialData from './SocialData';
import './Social-Network.css';

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' }
});

class SocialNetwork extends Component {
  state = { open: false };

  render() {
    const { open } = this.state;
    return (
      <div>
        <div className="container-sn">
          <h1 className="title title-sn">Social Network</h1>
          <section className="static-sn">
            <Fragment>
              {SocialData.map(({ title, content, link }, i) => (
                <Fragment>
                  <h2
                    className="box-social"
                    onClick={() =>
                      this.setState({ open: open === i ? false : i })
                    }
                  >
                    {open === i ? ' ☞   ' : ' ⇣   '}
                    {title}
                  </h2>
                  <Content
                    className="content"
                    pose={open === i ? 'open' : 'closed'}
                  >
                    <div className="content-wrapper">
                      <a href={link}>{content}</a>
                    </div>
                  </Content>
                </Fragment>
              ))}
            </Fragment>
          </section>
        </div>
      </div>
    );
  }
}

export default SocialNetwork;
