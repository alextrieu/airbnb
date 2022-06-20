import React from 'react'

export default function Card(props) {
  const {
      city,
      state, 
      distance,
      date,
      price,
      rating
  } = props.listing
  return (
    <div>{city}</div>
  )
}
