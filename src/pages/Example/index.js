import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import projects from "../../projects.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

export default class Test extends React.Component {

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
    <div class= "container">
      <div class="row justify-content-center">
        <div class= "col-lg-8 col-md-12 col-sm-12">
          <img height = "300" src = {project.image} alt = ""/>
        </div>
        <div class= "col-lg-4 col-md-12 col-sm-12">
          <div key={project.id} style={{ height: 600}}>
            <div> <strong> Project Name : </strong> {project.title} </div>
            <div> <strong> Description : </strong> {project.description} </div>
            <div> <strong> Technology stack : </strong> {project.techstack} </div>
            <div> <strong> Deployment Link : </strong> <a href = {project.link} target="_blank" rel="noopener noreferrer">  LINK </a></div>
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
      <div class = "jumbotron">
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