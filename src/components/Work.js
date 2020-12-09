import React from "react";
import PropTypes from "prop-types";

function Work(props){
  return(
    <React.Fragment>
      <div className="squareWork"> 
        <h3>{props.name}</h3>
        {/* <p>{props.description}</p> */}
      </div>
    </React.Fragment>
  );
}

Work.propTypes = {
  name: PropTypes.string,
  // description: PropTypes.string,
  id:  PropTypes.string
};

export default Work;
