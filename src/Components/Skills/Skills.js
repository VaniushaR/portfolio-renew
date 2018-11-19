import React, { Component } from 'react';
import ReactCardFlipper from 'react-card-flipper';
import './Skills.css';

class Skills extends Component {
  render() {
    return (
      <div>
        <div className="table-grid">
          <h2 className="title shadow">Skills</h2>
          <section className="tablero">
            <ReactCardFlipper
              width="15em"
              height="22em"
              behavior="hover"
              innerCardClass="card-1"
            >
              <div className="card">
                <h2 className="subtitle">Soft Skills</h2>
              </div>
              <div className="card">
                <section className="card-back">
                  <span>
                    <p>Team Work</p>
                  </span>
                  <span>
                    <p>Agile Methodology</p>
                  </span>
                  <span>
                    <p>Self-Learning</p>
                  </span>
                  <span>
                    <p>Effective Communication</p>
                  </span>
                  <span>
                    <p>Ethic</p>
                  </span>
                  <span>
                    <p>Leadership</p>
                  </span>
                  <span>
                    <p>Creativity</p>
                  </span>
                </section>
              </div>
            </ReactCardFlipper>
          </section>

          <section className="tablero">
            <ReactCardFlipper
              width="15em"
              height="22em"
              behavior="hover"
              innerCardClass="card-2"
            >
              <div className="card">
                <h2 className="subtitle">Tech Skills</h2>
              </div>
              <div className="card">
                <section className="card-back">
                  <span>
                    <p>JavaScript ECS6</p>
                  </span>
                  <span>
                    <p>React JS</p>
                  </span>
                  <span>
                    <p>React Native</p>
                  </span>
                  <span>
                    <p>JSX</p>
                  </span>
                  <span>
                    <p>Node JS</p>
                  </span>
                  <span>
                    <p>SASS</p>
                  </span>
                  <span>
                    <p>HTML 5</p>
                  </span>
                  <p>CSS3</p>
                </section>
              </div>
            </ReactCardFlipper>
          </section>
          <section className="tablero">
            <ReactCardFlipper
              width="15em"
              height="22em"
              behavior="hover"
              innerCardClass="card-3"
            >
              <div className="card">
                <h2 className="subtitle">Tools</h2>
              </div>
              <div className="card">
                <section className="card-back">
                  <span>
                    <p>Git</p>
                  </span>
                  <span>
                    <p>GitHub</p>
                  </span>
                  <span>
                    <p>GitHub Pages</p>
                  </span>
                  <span>
                    <p>Firebase</p>
                  </span>
                  <span>
                    <p>Firestore</p>
                  </span>
                  <span>
                    <p>NPM/YARN</p>
                  </span>
                </section>
              </div>
            </ReactCardFlipper>
          </section>
          <section className="tablero">
            <ReactCardFlipper
              width="15em"
              height="22em"
              behavior="hover"
              innerCardClass="card-4"
            >
              <div className="card">
                <h2 className="subtitle size">Frameworks</h2>
              </div>
              <div className="card">
                <section className="card-back">
                  <span>
                    <p>Materialize</p>
                  </span>
                  <span>
                    <p>Bootstrap</p>
                  </span>
                  <span>
                    <p>React-Materialize</p>
                  </span>
                  <span>
                    <p>Semantic-UI React</p>
                  </span>
                  <span>
                    <p>Material-UI</p>
                  </span>
                  <span>
                    <p>React-Bootstrap</p>
                  </span>
                </section>
              </div>
            </ReactCardFlipper>
          </section>
          <section className="tablero">
            <ReactCardFlipper
              width="15em"
              height="22em"
              behavior="hover"
              innerCardClass="card-5"
            >
              <div className="card">
                <h2 className="subtitle">Ux </h2>
              </div>
              <div className="card">
                <section className="card-back">
                  <span>
                    <p>Sketching</p>
                  </span>
                  <span>
                    <p>Marvel</p>
                  </span>
                  <span>
                    <p>Benchmark</p>
                  </span>
                  <span>
                    <p>MarkDown for Documentation</p>
                  </span>
                  <span>
                    <p>
                      Basic User Research: Pain Points, Goals, Needs, Solutions
                    </p>
                  </span>
                  <span>
                    <p>Basic User StoryTelling</p>
                  </span>
                </section>
              </div>
            </ReactCardFlipper>
          </section>
        </div>
      </div>
    );
  }
}
export default Skills;

/*
1. Card horizontal simple flip
 <ReactCardFlipper>
            <div className="card-front">The cards front content goes here.</div>
            <div className="card-back">The cards back content goes here.</div>
          </ReactCardFlipper>

2. Card with levitation horizontal flip
<ReactCardFlipper
            width="300px"
            height="550px"
            behavior="click"
            levitate={true}
          >
            <div className="card">
              <h3>Click me to learn more</h3>
            </div>
            <div className="card-back">
              <p>You Clicked!</p>
            </div>
          </ReactCardFlipper>

*/
