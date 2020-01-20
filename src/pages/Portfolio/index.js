import React, { Component} from "react";
import projects from "../../projects.json";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";

class Portfolio extends Component {
  state = {
    projects,
    id: "",
    chevronWidth: 50
  };

  handleClick = id => {
    this.setState({ id });
    // link to the project
  };

  render() {
    return (
      
    //   <div style={{ padding: `0 ${chevronWidth}px` }}>
    //   <ItemsCarousel
    //     requestToChangeActive={setActiveItemIndex}
    //     activeItemIndex={activeItemIndex}
    //     numberOfCards={2}
    //     gutter={20}
    //     leftChevron={<button>{'<'}</button>}
    //     rightChevron={<button>{'>'}</button>}
    //     outsideChevron
    //     chevronWidth={chevronWidth}
    //   >
    //   {this.state.projects.map(project =>
    //   <div
    //     key={project.id}
    //     style={{
    //       height: 200,
    //       background: project.image
    //     }}
    //   />
    //   )}

    //   </ItemsCarousel>
    // </div>

      <Jumbotron>
        <div className="row">
          {this.state.projects.map(project => (
            <div className="col-sm-4">
              <h4>{project.title}</h4>
              <h6>{project.description}</h6>
              <Card
                key = {project.id}
                id = {project.id}
                image = {project.image}
              />
              <button className="btn btn-secondary">
                <a href={project.link}>
                  View Project
                </a>
              </button>
            </div>
          ))}
        </div>
      </Jumbotron>

    );
  }
}

export default Portfolio;
