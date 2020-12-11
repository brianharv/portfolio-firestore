import React from 'react';
import NewWorkForm from './NewWorkForm';
import WorkList from './WorkList';
import EditWorkForm from './EditWorkForm';
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import WorkDetail from './WorkDetail';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import Sidebar from './Sidebar';


class WorkControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectWork: null,
      editing: false,
      user: null
    }
    // adding this = dont have to sign in?
    firebase.auth().onAuthStateChanged(user =>  {
      this.setState({ user: user })
    })
  }

  handleClick = () => {
    if (this.state.selectedWork != null) {
      this.setState({
        selectedWork: null,
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
        id: work.id,
        url: work.get("url")
      }
      this.setState({ selectedWork: firestoreWork });
    });
  }

  handleDeletingWork = (id) => {
    this.props.firestore.delete({collection: 'works', doc: id});
    this.setState({selectedWork: null});
  }

  handleEditClick = () => {
    this.setState({editing: true})
  }

  handleEditingWorkInList = () => {
    // const editedMasterWorkList = this.props.masterWorkList
    // .filter(work => work.id !== this.state.selectedWork.id)
    // .concat(workToEdit);
    this.setState({
      editing: false,
      selectedWork: null
    });
  }

  render(){

    const auth = this.props.firebase.auth();

    if(!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <Sidebar/>
          <div className="main">
            <div className="row">
            <div className="col-sm">
                <p className="">you must be signed in to access this page</p>
                <Link className="btn btn-outline-dark btn-sm btn-block" to="/signin">Sign In</Link>
                  </div>
            <div className="col-sm"></div>

            </div>
          </div>
        </React.Fragment>
      )
    }
    if((isLoaded(auth)) && (auth.currentUser != null)) {
      console.log("test");
    let currentlyVisibleState = null;
    let returnButton = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditWorkForm work = {this.state.selectedWork} onEditWork = {this.handleEditingWorkInList} />
      returnButton = <button className="btn btn-outline-dark" onClick={this.handleClick}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
    </svg></button>;
    } else if (this.state.selectedWork != null) {
      currentlyVisibleState = 
      <WorkDetail 
        work = {this.state.selectedWork}
        onClickingDelete = {this.handleDeletingWork}
        onClickingEdit = {this.handleEditClick}/>
      returnButton = <button className="btn btn-outline-dark" onClick={this.handleClick}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
    </svg></button>;
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewWorkForm onNewWorkCreation={this.handleAddingNewWorkToList} />;
      returnButton = <button className="btn btn-outline-dark btn-sm" onClick={this.handleClick}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
    </svg></button>;
    } else {
      currentlyVisibleState = <WorkList onClickingNew={this.handleClick} workList={this.props.masterWorkList} onWorkSelection={this.handleChangingSelectedWork} />;
    }
    return (
      <React.Fragment>
        <Sidebar/>
        <div className="main">
          {currentlyVisibleState} 
          {returnButton}
        </div>
      </React.Fragment>
      )
    }
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