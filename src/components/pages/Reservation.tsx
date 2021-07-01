import React from 'react';
import MainHeader from '../atomics/MainHeader';
import ReservationTab from '../atomics/ReservationTab';
import '../../styles/App.scss';
import '../../styles/Page.scss';

const Reservation: React.FC = () => {

  return (
    <div className="page-reservation">
      <MainHeader />
      <ReservationTab />
    </div>
  );
}

export default Reservation;