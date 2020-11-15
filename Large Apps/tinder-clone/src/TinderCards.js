
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'Salman Khan',
      url: 'https://static.toiimg.com/thumb/msid-70305128,imgsize-121900,width-800,height-600,resizemode-75/70305128.jpg'
    },
    {
      name: 'Saharukh Khan',
      url: 'http://pic.photo-aks.com/large/shahrokh-khan-baliwood.jpg'
    }
  ])
  const swiped = (direction, name) => {
    console.log('You swiped: ' + direction)
  }

  const outOfFrame = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }
  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {
          people.map((data) => {
            return (
              <TinderCard className='swipe' key={data.name} onSwipe={(dir) => swiped(dir, data.name)} onCardLeftScreen={() => outOfFrame(data.name)}>
                <div style={{ backgroundImage: 'url(' + data.url + ')' }} className='card'>
                  <h3>{data.name}</h3>
                </div>
              </TinderCard>
            );
          })
        }

      </div>
    </div>
  );
}

export default TinderCards;
