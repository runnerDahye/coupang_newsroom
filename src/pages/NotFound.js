import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default NotFound;
