import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      margin: 0,
      padding: '20px'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        maxWidth: '500px'
      }}>
        <h1 style={{ fontSize: '4rem', margin: 0, fontWeight: 'bold' }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', margin: '20px 0', fontWeight: 300 }}>
          페이지를 찾을 수 없습니다
        </h2>
        <p style={{ 
          fontSize: '1rem', 
          margin: '20px 0', 
          opacity: 0.9, 
          lineHeight: 1.6 
        }}>
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.<br />
          URL을 다시 한 번 확인해 주세요.
        </p>
        <Link 
          to="/" 
          style={{
            display: 'inline-block',
            marginTop: '30px',
            padding: '12px 30px',
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '25px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            transition: 'all 0.3s ease',
            fontWeight: 500
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.3)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.2)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          🏠 홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
