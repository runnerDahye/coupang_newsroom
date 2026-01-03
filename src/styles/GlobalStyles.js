import styled, { createGlobalStyle } from "styled-components";

// 전역 CSS 스타일
const GlobalStyles = createGlobalStyle`
  :root {
    /* Primary Colors */
    --primary-50: #eff6ff;
    --primary-100: #dbeafe;
    --primary-200: #bfdbfe;
    --primary-300: #93c5fd;
    --primary-400: #60a5fa;
    --primary-500: #3b82f6;
    --primary-600: #2563eb;
    --primary-700: #1d4ed8;
    --primary-800: #1e40af;
    --primary-900: #1e3a8a;

    /* Secondary Colors */
    --secondary-50: #f8fafc;
    --secondary-100: #f1f5f9;
    --secondary-200: #e2e8f0;
    --secondary-300: #cbd5e1;
    --secondary-400: #94a3b8;
    --secondary-500: #64748b;
    --secondary-600: #475569;
    --secondary-700: #334155;
    --secondary-800: #1e293b;
    --secondary-900: #0f172a;

    /* Success Colors */
    --success-50: #f0fdf4;
    --success-100: #dcfce7;
    --success-200: #bbf7d0;
    --success-300: #86efac;
    --success-400: #4ade80;
    --success-500: #22c55e;
    --success-600: #16a34a;
    --success-700: #15803d;
    --success-800: #166534;
    --success-900: #14532d;

    /* Warning Colors */
    --warning-50: #fffbeb;
    --warning-100: #fef3c7;
    --warning-200: #fde68a;
    --warning-300: #fcd34d;
    --warning-400: #fbbf24;
    --warning-500: #f59e0b;
    --warning-600: #d97706;
    --warning-700: #b45309;
    --warning-800: #92400e;
    --warning-900: #78350f;

    /* Danger Colors */
    --danger-50: #fef2f2;
    --danger-100: #fee2e2;
    --danger-200: #fecaca;
    --danger-300: #fca5a5;
    --danger-400: #f87171;
    --danger-500: #ef4444;
    --danger-600: #dc2626;
    --danger-700: #b91c1c;
    --danger-800: #991b1b;
    --danger-900: #7f1d1d;

    /* Info Colors */
    --info-50: #f0f9ff;
    --info-100: #e0f2fe;
    --info-200: #bae6fd;
    --info-300: #7dd3fc;
    --info-400: #38bdf8;
    --info-500: #0ea5e9;
    --info-600: #0284c7;
    --info-700: #0369a1;
    --info-800: #075985;
    --info-900: #0c4a6e;

    /* Neutral Colors */
    --neutral-50: #fafafa;
    --neutral-100: #f5f5f5;
    --neutral-200: #e5e5e5;
    --neutral-300: #d4d4d4;
    --neutral-400: #a3a3a3;
    --neutral-500: #737373;
    --neutral-600: #525252;
    --neutral-700: #404040;
    --neutral-800: #262626;
    --neutral-900: #171717;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      color: #222;
      font-family: 'Pretendard';
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  a {text-decoration: none;}
`;

const Container = styled.section`
  max-width: 1600px; margin: 0 auto; width: 100%;
`;

const Button = styled.button`
  background: ${props => props.variant === 'primary' ? 'var(--primary-500)' : 'var(--neutral-500)'};
  color: ${props => props.variant === 'primary' ? 'white' : '#222'};
  padding: 10px 12px;
  border: none;
  cursor: pointer;
  border-radius: 40px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.variant === 'primary' 
      ? 'var(--primary-600)' 
      : 'var(--neutral-500)'
    };
  }
`;

const IconBtn = styled.button`
  background: #222;
  cursor: pointer;
  padding: 0;
  width: ${props => {
    switch (props.variant) {
      case 'small': return '16px';
      case 'big': return '32px';
      default: return '24px';
    }
  }};
  height: ${props => {
    switch (props.variant) {
      case 'small': return '16px';
      case 'big': return '32px';
      default: return '24px';
    }
  }};
  border: none;
  transition: all 0.3s ease;
  
  mask: url(${props => {
    switch (props.iconstyle) {
      case 'search':
        return `${process.env.PUBLIC_URL}/common/icon_search.svg`; //검색 아이콘
      case 'close':
        return `${process.env.PUBLIC_URL}/common/icon_close.svg`; //닫기 아이콘
      default:
        return 'none';
    }
  }}) no-repeat center / contain;

  &:hover {
    background: var(--primary-500);
  }
`;

const ModalOverlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;

  &.visible {
    opacity: 1;
    visibility: visible;

    .modal-inner.sch {
      transform: translateY(0%);
    }
  }

  .dimmed {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }

  .modal-inner {
    position: relative;
    z-index: 2;
    background: #fff;

    &.sch {
      width: 100%;
      height: 200px;
      border-radius: 0 0 25px 25px;
      transform: translateY(-100%);
      transition: transform 0.3s ease;
    }

    button[iconstyle="close"] {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
  }
`;

export { Container, Button, IconBtn, ModalOverlay };
export default GlobalStyles;