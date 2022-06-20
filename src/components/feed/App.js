import React from 'react';
import Card from './Card.js';
import { listings } from '../data/listings.js';
import '/Users/work/Desktop/airbnb/src/css/App.css'


function App() {
  
  const cardElements = listings.map((listing) => <Card key={listing.id} listing={listing}/>);


  return (
    <div className='listing-container'>
      {cardElements}
    </div>
    
  );
}

export default App;
