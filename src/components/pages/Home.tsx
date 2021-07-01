import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/reservation">예약하러 가기</Link>
    </div>
  );
}

export default Home;