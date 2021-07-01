import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.scss';

const MainHeader: React.FC = () => {
  return (
    <div className="header-main">
      <Link to="/">뒤로가기</Link>
    </div>
  );
}

export default MainHeader;