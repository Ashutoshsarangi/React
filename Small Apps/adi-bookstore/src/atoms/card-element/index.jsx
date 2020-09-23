import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css';
import { BaseUrl } from '../../config/config';
import axios from 'axios';
import { connect } from 'react-redux';

class CardItem extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios.get(BaseUrl + '/users').then((res) => {
      // this.setState({
      //   cardItems: res.data
      // })
      this.props.newData(res.data);
      console.log(res.data);
    });
    console.log('State OBJ', this.state);
  }

  render() {
    console.log(this.props);
    return (
      <>
        <div className="flexContainer">
          {
            this.props.cardItems &&
            this.props.cardItems.map((card) => {
              return <Card className="cardStyle" key={card._id}>
                <Card.Img variant="top" src={BaseUrl + '/' + card.bookPic} className="cardImg" />
                <Card.Body>
                  <Card.Title>{card.bookName}</Card.Title>
                  <Card.Text> {card.bookDescription} </Card.Text>
                  <a href={BaseUrl + '/' + card.bookAttachment} target="_blank" download="" className="btn btn-primary">Download</a>
                </Card.Body>
              </Card>

            })
          }
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardItems: state.bookReducer.bookList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    newData: (data) => dispatch({
      type: 'SaveAll',
      payload: data
    })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);