import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="cards-grid">
        <h3 className="title shadow">Projects</h3>
        <div className="card-container shadow">
          <div className="card-hoverable">
            <img
              src="https://raw.githubusercontent.com/VaniushaR/nierika/master/src/assets/Documentation/Nierika-login.png"
              alt="Nierika Social Network Screen"
              className="project-img"
            />
            <div className="middle">
              <p>
                This is a project buided with React Js, Firestore, Firebase,
                Semantic UI React.
              </p>
            </div>
          </div>
          <div>
            <h3 className="subtitle">Nierika Social Network</h3>
            <div className="box-buttons">
              <button className="text-btn">Ver Demo</button>
              <button className="text-btn">Ver Repositorio</button>
            </div>
          </div>
        </div>
        <div className="card-container shadow">
          <div className="card-hoverable">
            <img
              src="https://raw.githubusercontent.com/VaniushaR/cdmx-2018-06-bc-core-am-burger-queen/master/src/Assets/Documentation/Ipad.png"
              alt="Burger Queen Screen"
              className="project-img"
            />
            <div className="middle">
              <p>
                This is a proyect buided with React JS, Firestore, Firebase and
                Materialize.
              </p>
            </div>
          </div>
          <div>
            <h3 className="subtitle">Burger Queen</h3>
            <div className="box-buttons">
              <button className="text-btn">Ver Demo</button>
              <button className="text-btn">Ver Repositorio</button>
            </div>
          </div>
        </div>
        <div className="card-container shadow">
          <div className="card-hoverable">
            <img
              src="https://raw.githubusercontent.com/VaniushaR/MxHacksV-Callejeros/master/assets/Documentation/Callejeros.png"
              alt="Callejeros Screen"
              className="project-img callejeros"
            />
            <div className="middle">
              <p>This project is builded with JS Vanilla. </p>
            </div>
          </div>
          <h3 className="subtitle">Callejeros</h3>
          <div className="box-buttons">
            <button className="text-btn">Ver Demo</button>
            <button className="text-btn">Ver Repositorio</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

/*
 <Card
            className="small"
            header={
              <CardTitle
                image={
                  'https://raw.githubusercontent.com/VaniushaR/nierika/master/src/assets/Documentation/Nierika-login.png'
                }
              >
                Nierika
              </CardTitle>
            }
            actions={[
              <a href="#">
                Nierika. Social Network to learn and teach a original language.
                Built with React.js, Firebase, Semantic-UI, GitHub Pages, CSS3,
                HTML5.
              </a>
            ]}
          >
            simple
          </Card>


          <section className="project-cards">
          <Card
            className="small"
            header={
              <CardTitle
                image={
                  'https://raw.githubusercontent.com/VaniushaR/cdmx-2018-06-bc-core-am-burger-queen/master/src/Assets/Documentation/Ipad.png'
                }
              >
                Burger Queen
              </CardTitle>
            }
            actions={[
              <a href="#">
                Nierika. Social Network to learn and teach a original language.
                Built with React.js, Firebase, Semantic-UI, GitHub Pages, CSS3,
                HTML5.
              </a>
            ]}
          >
            simple
          </Card>
        </section>
        <section className="project-cards">
          <Card
            className="small"
            header={
              <CardTitle
                image={
                  'https://raw.githubusercontent.com/VaniushaR/MxHacksV-Callejeros/master/assets/Documentation/Callejeros.png'
                }
              >
                Callejeros
              </CardTitle>
            }
            actions={[
              <a href="#">
                Nierika. Social Network to learn and teach a original language.
                Built with React.js, Firebase, Semantic-UI, GitHub Pages, CSS3,
                HTML5.
              </a>
            ]}
          >
            simple
          </Card>
        </section>

          */
