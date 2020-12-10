import React from 'react';
import PropTypes from "prop-types";

function WorkDetail(props) {
  const { work, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h3>Work detail </h3>
      <p>{work.name}</p>
      <button onClick= { props.onClickingEdit }>Update this Work</button>
      <button onClick= {() => onClickingDelete(work.id) }>Delete this Work</button>
      <hr/>
    </React.Fragment>
  )
}

WorkDetail.propTypes = {
  work: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default WorkDetail;