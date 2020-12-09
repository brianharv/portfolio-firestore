import React from 'react';
import NewWorkForm from './NewWorkForm';
import WorkList from './WorkList';
import EditWorkForm from './EditWorkForm';
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import WorkDetail from './WorkDetail';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class WorkControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectWork: null,
      editing: false
    }
  }

  handleClick = () => {
    if (this.state.selectedWork != null) {
      this.setState({
        selectedTicket: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewWorkToList = (newWork) => {
    const { dispatch } = this.props;
    const action2 = a.toggleForm();
    dispatch(action2)
  }

  handleChangingSelectedWork = (id) => {
    this.props.firestore.get({collection: 'works', doc: id}).then((work) => {
      const firestoreWork = {
        name: work.get("name"),
        description: work.get("description"),
        id: work.id
      }
      this.setState({ selectedWork: firestoreWork });
    });
  }

  handleDeletingWork = (id) => {
    this.props.firestore.delete({collection: 'works', docs: id});
    this.setState({selectedWork: null});
  }

  handleEditClick = () => {
    this.setState({editing: true})
  }

  handleEditingWorkInList = () => {
    this.setState({
      editing: false,
      selectedWork: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditWorkForm work = {this.state.selectedWork} onEditWork = {this.handleEditingWorkInList} />
      buttonText = "Return to Work List";
    } else if (this.state.selectedWork != null) {
      currentlyVisibleState = 
      <WorkDetail 
        ticket = {this.state.selectedWork}
        onClickingDelete = {this.handleDeletingWork}
        onClickingEdit = {this.handleEditClick}/>
      buttonText = "Return to Work List"
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewWorkForm onNewWorkCreation={this.handleAddingNewWorkToList} />;
      buttonText = "Return to Work List";
    } else {
      currentlyVisibleState = <WorkList workList={this.props.masterWorkList} onTicketSelection={this.handleChangingSelectedWork} />;
      buttonText = "Add Work";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-outline-dark" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

WorkControl.propTypes = {
  masterWorkList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterWorkList: state.masterWorkList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

WorkControl = connect(mapStateToProps)(WorkControl);

export default withFirestore(WorkControl);