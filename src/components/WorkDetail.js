import React from 'react';
import PropTypes from "prop-types";
import { BrowserRouter as Route } from "react-router-dom";

function WorkDetail(props) {
  const { work, onClickingDelete } = props;

  return (
    <React.Fragment>
        <div className="row mt-5">
          <div className="col-6">
            <h3>{work.name}</h3>
            <p>{work.description}</p>
            <p>{work.url}</p>
            <a target="_blank" href={work.url}>Visit Link!</a>
            {/* <p><a href =/{work.url}/></p> */}
            <button className="btn btn-outline-dark btn-block btn-sm" onClick= { props.onClickingEdit }>Update this Work</button>
            <button className="btn btn-outline-danger btn-block btn-sm" onClick= {() => onClickingDelete(work.id) }>Delete this Work</button>
            <hr/>
          </div>
        </div>
    </React.Fragment>
  )
};

WorkDetail.propTypes = {
  work: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default WorkDetail;