import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom"; //Link는 react-router-dom에서 가져옵니다.
import { Button, Container, IconBtn, ModalOverlay } from '../styles/GlobalStyles';

function Header() {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
    <header>
      <Container className="header-content">
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
          <IconBtn iconstyle="search" onClick={() => setIsSearchOpen(true)}></IconBtn>
          <Button variant="primary" onClick={() => { navigate('/'); }}>뉴스레터 구독</Button>
        </div>
      </Container>
    </header>

    {/* 검색 모달  - isSearchOpen이 true일때만 렌더링, onClose prop으로 닫기 함수 전달 - handleCloseModal 사용! */}
    {/* {isSearchOpen && ( <SearchModal onClose={handleCloseModal} />)} */}
    <SearchModal onClose={() => setIsSearchOpen(false)} isOpen={isSearchOpen} />
    </>
  );
}

// 검색 모달 컴포넌트
const SearchModal = ({ onClose, isOpen }) => {
    const inputRef = useRef();

    useEffect(() => {
      // console.log(inputRef);
      if(isOpen && inputRef.current) {
        inputRef.current.focus();
      } else if (!isOpen && inputRef.current) {
        inputRef.current.value = '';
      }
    }, [isOpen]); // isOpen이 변경될 때 실행

    const onReset = useCallback(() => { //onReset 함수가 매번 새로 생성되는거 방지
      if(inputRef.current) {
        inputRef.current.value = '';
        onClose()
      }
    }, [onClose]);


  

  return  (
    <ModalOverlay className={`modal-overlay ${isOpen ? 'visible' : 'hidden'}`}>
      <div className="dimmed"></div>
      <div className="modal-inner sch flex items-center justify-center flex-col">
        <div className="sch-box flex items-center justify-center gap-10 overflow-hidden">
          <input ref={inputRef} type="text" placeholder="username" className="input-basic" />
          <IconBtn iconstyle="search" onClick={onReset} variant="big"></IconBtn>
        </div>
        <IconBtn iconstyle="close" onClick={onClose}></IconBtn>
      </div>
    </ModalOverlay>
  );
}


export default Header;