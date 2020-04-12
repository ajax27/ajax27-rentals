import React, { Component } from 'react';
import RentalCard from 'components/rental/RentalCard';
import { connect } from 'react-redux';
import { fetchRentals } from 'actions';

class HomeRental extends Component {

  componentDidMount() {
    this.props.dispatch(fetchRentals());
  }

  renderRentals = rentals =>
    rentals.map(rental =>
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental} />
      </div>
    );

  render() {
    const { rentals } = this.props;

    return (
      <div className="card-list">
        <h1 className="page-title">Your Home In The Royal County</h1>
        <div className="row">
          {this.renderRentals(rentals)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(HomeRental);
