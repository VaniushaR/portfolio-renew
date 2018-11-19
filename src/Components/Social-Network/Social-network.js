import React, { Component, Fragment } from 'react';
import posed from 'react-pose';
import SocialData from './SocialData';
import './Social-Network.css';
import AnimatedWork from '../Animation/Animation';
import CVE from '../../Assets/English CV.pdf';
import CVS from '../../Assets/Español CV.pdf';

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
          <section className="static-sn">
            <Fragment>
              <h1 className="title title-sn shadow">Social Network</h1>
              {SocialData.map(
                ({ title, content, link, content2, content3 }, i) => (
                  <Fragment>
                    <h2
                      className="box-social shadow"
                      onClick={() =>
                        this.setState({ open: open === i ? false : i })
                      }
                    >
                      {open === i ? ' ☞   ' : ' ⇣   '}
                      {title}
                    </h2>
                    <Content
                      className="content shadow"
                      pose={open === i ? 'open' : 'closed'}
                    >
                      <div className="content-wrapper">
                        <a href={link} download>
                          {content}
                        </a>
                        <a href={CVS} download>
                          {content2}
                        </a>
                        <a href={CVE} download>
                          {content3}
                        </a>
                      </div>
                    </Content>
                  </Fragment>
                )
              )}
            </Fragment>
          </section>
        </div>
      </div>
    );
  }
}

export default SocialNetwork;
