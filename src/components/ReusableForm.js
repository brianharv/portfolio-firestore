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
      </form>
    </React.Fragment>
  );
}

