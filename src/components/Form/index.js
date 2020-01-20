import React from "react";
import "./style.css";

function Form(props){
  return (
    <>
      <form className="form">
        <div className="form-group">
          <h6>Name</h6>
          <input
            value={props.data.name}
            name="name"
            onChange={props.onInputChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <h6>Email Address</h6>
          <input
            value={props.data.description}
            name="email"
            onChange={props.onInputChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <h6>Phone Number</h6>
          <input
            value={props.data.problem}
            name="phone"
            onChange={props.onInputChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <h6>Message</h6>
          <textarea
            value={props.data.overview}
            name="overview"
            onChange={props.onInputChange}
            type="text"
            className="form-control"
            rows="5"
          />
        </div>
      </form>
    </>
  );
}

export default Form;