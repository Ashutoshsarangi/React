import React, { Component } from 'react';
import './style.css';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Header extends Component {
  // const history = useHistory();
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  handleClose() {
    this.setState({
      show: false
    });
  }
  handleShow() {
    this.setState({
      show: true
    });
  }

  submitCardDetail(event) {
    event.preventDefault();
    Swal.fire(
      'Success!',
      'Your book uploaded Successfully.',
      'success'
    )
  }

  logOut() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to Logout',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        // Remove Auth Information From Local Storage
        this.props.logout();
        this.props.history.push('/login');
      } else if (result.dismiss === Swal.DismissReason.cancel) {

      }
    })
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <h1 className="white-Color">Adi's BookStore</h1>
          {
            this.props.loggedIn &&
            <h3 className="white-Color" onClick={() => this.handleShow()} >Add Book</h3>
          }
          {
            this.props.loggedIn &&
            <h3 className="white-Color" onClick={() => this.logOut()}>Log out</h3>
          }
        </nav>
        <Modal show={this.state.show} onHide={() => this.handleClose()} animation={false} style={{ opacity: 1 }}>
          <Modal.Header closeButton>
            <Modal.Title>Add A Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Card Title</label>
                <input type="text" name="cardTitle" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Card Title" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Card Description</label>
                <textarea className="form-control" name="cardDescription" placeholder="Enter Card Description"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="uploadBookImage">Upload Book Image</label>
                <input type="file" name="bookImageUpload" />
              </div>
              <div className="form-group">
                <label htmlFor="uploadBookImage">Upload The Book You Like</label>
                <input type="file" name="bookUpload" />
              </div>
              <div className="form-group" style={{ textAlign: 'center' }}>
                <button type="submit" className="btn btn-primary" onClick={(event) => this.submitCardDetail(event)}>Submit</button>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer className="handleModalButton">
            <Button variant="secondary" onClick={() => this.handleClose()}>
              Close
          </Button>
            <Button variant="primary" onClick={() => this.handleClose()}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: 'loggedOut' })
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

