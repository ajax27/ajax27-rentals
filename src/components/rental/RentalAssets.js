import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RentalAssets = () =>
  <div className="rental-assets">
    <h3 className="title">Assets</h3>
    <div className="row">
      <div className="col-md-6">
        <span><FontAwesomeIcon icon="asterisk" className="fa-asterisk" /> Cooling</span>
        <span><FontAwesomeIcon icon="thermometer" className="fa-thermometer" /> Heating</span>
        <span><FontAwesomeIcon icon="location-arrow" className="fa-location-arrow" /> Iron</span>
      </div>
      <div className="col-md-6">
        <span><FontAwesomeIcon icon="desktop" className="fa-desktop" /> Working area</span>
        <span><FontAwesomeIcon icon="cube" className="fa-cube" /> Washing machine</span>
        <span><FontAwesomeIcon icon="soap" className="fa-soap" /> Dishwasher</span>
      </div>
    </div>
  </div>

export default RentalAssets;