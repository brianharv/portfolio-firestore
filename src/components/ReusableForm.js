import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
        <div className="row">
          <div className="col-sm">
      <form className="formHolder form-group" onSubmit={props.formSubmissionHandler}>
      <input className="forms form-control"
          type='text'
          name='name'
          placeholder='Name the body of work' />
      <textarea className="forms form-control"
          type='text'
          name='description'
          placeholder='description' />
      <textarea className="forms form-control"
          type='text'
          name='url'
          placeholder='project URL' />
          <br></br>
          <button className="btn btn-outline-dark btn-sm btn-block" type='submit'>{props.buttonText}</button>
      </form>
          </div>
          <div className="col-sm">

          </div>
        </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes= {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  formSubmissionHandler: PropTypes.func
}

export default ReusableForm;

