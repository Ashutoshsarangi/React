import React from 'react';
import './style.css';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const history = useHistory();

  function logOut() {
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
        history.push('/login');
      } else if (result.dismiss === Swal.DismissReason.cancel) {

      }
    })
  }
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <h1 className="white-Color">Adi's BookStore</h1>
        <h3 className="white-Color" >Add Book</h3>
        <h3 className="white-Color" onClick={() => logOut()}>Log out</h3>
      </nav>
    </>
  );
}