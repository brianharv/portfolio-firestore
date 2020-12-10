import React from "react";
import Work from './Work';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function WorkList(props) {

  useFirestoreConnect([
    { collection: 'works' }
  ]);

  const works = useSelector(state => state.firestore.ordered.works);

  if (isLoaded(works)) {
    return (
      <React.Fragment>
        {works.map((work) => {
          return <Work
          whenWorkClicked = { props.onWorkSelection }
          name = {work.name}
          description = {work.description}
          url={work.url}
          id = {work.id}/>
        })}
        <br></br>
        <div onClick={props.onClickingNew} className="squareWork">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
          </div>
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
  onWorkSelection: PropTypes.func,
  onClickingNew: PropTypes.func
};

export default WorkList;
