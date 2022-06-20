import React from 'react';
import Card from './Card.js';
import { listings } from '../data/listings.js'

function App() {
  
  const cardElements = listings.map((listing) => <Card key={listing.id} listing={listing}/>);


  return (
    <>
      {cardElements}
    </>
    
  );
}

export default App;
