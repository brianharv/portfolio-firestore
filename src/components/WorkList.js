import React from "react";
import Work from './Work';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function WorkList() {

  useFirestoreConnect([
    { collection: 'works' }
  ]);

  const works = useSelector(state => state.firestore.ordered.works);

  // <h3>This is a work</h3>
  // <img src="#" alt="Work Thumbnail" width="200" height="250"></img>

  if (isLoaded(works)) {
    return (
      <React.Fragment>
        <hr/>
        {works.map((work) => {
          return <Work
          name = {work.name}
          description = {work.description}
          id = {work.id}/>
        })}
      </React.Fragment>
    );

  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

WorkList.propTypes = {
  // onWorkSelection: PropTypes.func
};

export default WorkList;
