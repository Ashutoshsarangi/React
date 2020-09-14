import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css'

export default function CardItem() {
  const cardItems = [
    {
      id: 1,
      imgSrc: require('../../asset/a.png'),
      cardTitle: 'Kids Math',
      cardDescription: `Read The Everything Kids' Math Puzzles Book: Brain Teasers, Games, and Activities for Hours`
    },
    {
      id: 2,
      imgSrc: require('../../asset/b.png'),
      cardTitle: 'Kids Math',
      cardDescription: `Read The Everything Kids' Math Puzzles Book: Brain Teasers, Games, and Activities for Hours`
    },
    {
      id: 3,
      imgSrc: require('../../asset/c.png'),
      cardTitle: 'Kids Math',
      cardDescription: `Read The Everything Kids' Math Puzzles Book: Brain Teasers, Games, and Activities for Hours`
    },
    {
      id: 4,
      imgSrc: require('../../asset/d.png'),
      cardTitle: 'Kids Math',
      cardDescription: `Read The Everything Kids' Math Puzzles Book: Brain Teasers, Games, and Activities for Hours`
    },
  ];
  return (
    <>
      <div className="flexContainer">
        {
          cardItems.map((card) => {
            return <Card className="cardStyle" key={card.id}>
              <Card.Img variant="top" src={card.imgSrc} className="cardImg" />
              <Card.Body>
                <Card.Title>{card.cardTitle}</Card.Title>
                <Card.Text> {card.cardDescription} </Card.Text>
                <a href="./assets/math_puzzles_book_.pdf" target="_blank" download="" className="btn btn-primary">Download</a>
              </Card.Body>
            </Card>

          })
        }
      </div>
    </>
  );
}