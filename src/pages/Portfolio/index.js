import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import projects from "../../projects.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import "./style.css";
import Button from 'react-bootstrap/Button';
import GithubLogo from "./contact-icons-01.png";


export default class Portfolio extends React.Component {

  openLink(urlString) {
    window.open(urlString) 
  }

  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren(),
      })
    }, 100);
  }

  createChildren = () => projects.map(project =>
    <div key={project.id} className= "container">
      <div className="row justify-content-center">
        
        <div className= "col-lg-7 col-md-12 col-sm-12">
          <img height = "300" src = {project.image} alt = ""/>
        </div>
        <div className= "col-lg-5 col-md-12 col-sm-12">
          <div key={project.id} style={{ height: 800 }}>
            <div> <strong> Project Name : </strong> {project.title} </div>
            <div> <strong> Description : </strong> {project.description} </div>
            <div> <strong> Technology stack : </strong> {project.techstack} </div>
            {/* <div> <strong> Deployment Link : </strong> <a href = {project.link} target="_blank" rel="noopener noreferrer">  LINK </a></div> */}
            <div>
              {project.collaborators.length > 0 &&
                (
                  <div> <strong> Collaborators : </strong> </div>
                )
              }

              {project.collaborators.length > 0 &&
                (
                  project.collaborators.map(collab => <div> 
                    
                    <a href={collab.github} id="github-collab">
                    <img src={GithubLogo} alt="github" className="footer-icon"/>

                    {collab.name}
                  
                    </a>
                    
                    </div>)
                )
              }
            </div>
                     
            <div className = "row align-items-end" >

              <div className = "butt col-lg-6 col-md-12 col-sm-12" >
                <Button className = "butts" href = {project.link} target="_blank" rel="noopener noreferrer" variant = "secondary" > TEST RUN </Button>
              </div>
              <div className = "butt col-lg-6 col-md-12 col-sm-12">
                <Button className = "butts" href = {project.github} target="_blank" rel="noopener noreferrer" variant = "secondary" > GITHUB CODE </Button>
              </div>

            </div>
            
          </div>
        </div>

      </div>
    </div>
    
    );

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;

    return (
      <div className = "jumbotron" style={{ height: 600}}>
        <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={1}
        minimumPlaceholderTime={1000}
        placeholderItem={<div style={{ height: 200, background: 'light grey' }}></div>}

        // Carousel configurations
        numberOfCards={1}
        gutter={6}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}

        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}

        chevronWidth={24}
        rightChevron={<FontAwesomeIcon icon = {faAngleDoubleRight} size="5x"/>}
        leftChevron={<FontAwesomeIcon icon = {faAngleDoubleLeft} size="5x" />}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>
      </div>

    );  
  }
} 