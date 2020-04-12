import React from 'react';
import { capitalize } from 'helpers/functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RentalAssets from './RentalAssets';

const RentalInfo = ({ rental }) =>
  <div className="rental">
    <h2 className={`rental-type type-${rental.category}`}>
      {rental.shared ? 'Shared' : 'Whole'} {rental.category}
    </h2>
    <h1 className="rental-title">{rental.title}</h1>
    <h2 className="rental-city">{capitalize(rental.city)}</h2>
    <div className="rental-room-info">
      <span><FontAwesomeIcon icon="building" className="fa-building" /> {rental.numOfRooms} bedrooms</span>
      <span><FontAwesomeIcon icon="user" className="fa-user" /> {rental.numOfRooms + 4} guests</span>
      <span><FontAwesomeIcon icon="bed" className="fa-bed" /> {rental.numOfRooms + 2} beds</span>
    </div>
    <p className="rental-description">
      {rental.description}
    </p>
    <hr />
    <RentalAssets />
  </div>

export default RentalInfo;