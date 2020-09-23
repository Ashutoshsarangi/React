import React, { Component } from 'react';
import './style.css';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { BaseUrl } from '../../../config/config';

class Header extends Component {
  // const history = useHistory();
  constructor(props) {
    super(props);
    this.state = { show: false, bookName: '', bookDescription: '', bookPic: null, bookAttachment: null };
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
  handleCardFields(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }
  onFileUpload(event, name) {
    this.setState({
      [name]: event.target.files[0]
    })
  }

  submitCardDetail(event) {
    event.preventDefault();
    const formData = new FormData();
    console.log(this.state);
    for (const item in this.state) {
      if (item !== 'show') {
        formData.append(item, this.state[item]);
      }
    }
    console.log(formData);
    axios.post(BaseUrl + '/users/upload', formData).then((res) => {
      console.log(res);
      this.props.addBook(res.data.data);
      Swal.fire(
        'Success!',
        'Your book uploaded Successfully.',
        'success'
      )
      this.handleClose();
    })

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
                <input type="text" name="bookName" className="form-control" value={this.state.bookName} onChange={(event) => this.handleCardFields(event)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Card Title" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Card Description</label>
                <textarea className="form-control" name="bookDescription" value={this.state.bookDescription} onChange={(event) => this.handleCardFields(event)} placeholder="Enter Card Description"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="uploadBookImage">Upload Book Image</label>
                <input type="file" name="bookImageUpload" onChange={(event) => this.onFileUpload(event, 'bookPic')} />
              </div>
              <div className="form-group">
                <label htmlFor="uploadBookImage">Upload The Book You Like</label>
                <input type="file" name="bookUpload" onChange={(event) => this.onFileUpload(event, 'bookAttachment')} />
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
    loggedIn: state.authReducer.loggedIn
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: 'loggedOut' }),
    addBook: (data) => dispatch({
      type: 'ADD-BOOK',
      payload: data
    })
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

