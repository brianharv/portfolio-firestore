import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type='text'
          name='name'
          placeholder='Name' />
      <input
          type='text'
          name='description'
          placeholder='description' />
          <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes= {
  name: PropTypes.string,
  description: PropTypes.string,
  formSubmissionHandler: PropTypes.func
}

export default ReusableForm;

