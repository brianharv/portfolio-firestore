import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import ReusableForm from './ReusableForm';

function NewWorkForm(props){

  const firestore = useFirestore();

  function addWorkToFirestore(event) {
    event.preventDefault();
    props.onNewWorkCreation();

    return firestore.collection('works').add(
      {
        name: event.target.name.value,
        description: event.target.description.value,
        url: event.target.url.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm 
      formSubmissionHandler = {addWorkToFirestore}
      buttonText='Submit' />
    </React.Fragment>
  );
}

NewWorkForm.propTypes = {
  onNewWorkCreation: PropTypes.func
};

export default NewWorkForm;