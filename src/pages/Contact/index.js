import React, {Component} from "react";
import Form from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: ""
  }
  
  handleInputChange = event => {
    let fieldName = event.target.name;
    this.setState({
      [fieldName]: event.target.value
    });
  }

  handleSubmitForm = event => {
    event.preventDefault();
  }
  
  render (){
    return(
    <div>
      <Jumbotron>
        <Form data={this.state} onFormSubmit={this.handleSubmitForm} onInputChange={this.handleInputChange} />
        <button className="btn btn-secondary">Submit</button>
      </Jumbotron>
    </div>
    )
  }
}

export default Contact;