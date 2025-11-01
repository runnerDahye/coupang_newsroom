import React from "react";
import { Link, useNavigate } from "react-router-dom"; //Link는 react-router-dom에서 가져옵니다.
import { Button } from '../styles/GlobalStyles';

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container header-content">
        <h1><a href={process.env.PUBLIC_URL}><img src={process.env.PUBLIC_URL + '/common/logo.svg'} alt="Logo" /></a></h1>
        <div className="menu">
          <nav>
            <ul>
              <li><Link to="/">쿠팡소식</Link></li>
              <li><Link to="/about">보도자료</Link></li>
              <li><Link to="/content">자료실</Link></li>
              <li><Link to="/work">회사소개</Link></li>
            </ul>
          </nav>
          <Button variant="primary" onClick={() => { navigate('/'); }}>Primary</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;