import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditWorkForm (props) {
  const firestore = useFirestore();
  const { work } = props;

  function handleEditWorkFormSubmission(event) {
    event.preventDefault();
    props.onEditWork();
    const propertiesToUpdate = {
      name: event.target.name.value,
      description: event.target.description.value, 
      url: event.target.url.value
    }
    return firestore.update({collection: 'works', doc: work.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditWorkFormSubmission}
        buttonText="Update Work" />
    </React.Fragment>
  );
}

EditWorkForm.propTypes = {
  onEditWork: PropTypes.func
};

export default EditWorkForm;