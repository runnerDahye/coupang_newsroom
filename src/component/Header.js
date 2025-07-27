import React from "react";
import { Link } from "react-router-dom"; //Link는 react-router-dom에서 가져옵니다.

function Header() {
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/content">Content</Link></li>
          <li><Link to="/work">Work</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;