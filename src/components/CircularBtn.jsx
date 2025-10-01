// CircularBtn.jsx
import React from 'react';
import './CircularBtn.scss';

const CircularBtn = ({
  text = "",
  repeat = 3,
  as: Tag = 'div', // div, a, button 등
  href = '#',
  ...rest // ✅ 나머지 props (onClick 포함)를 받음
}) => {
  const repeatedText = Array(repeat).fill(`${text} • `).join('');

  return (
    <Tag
      className="round-btn"
      {...(Tag === 'a' ? { href } : {})}
      {...rest} // ✅ 여기서 onClick 같은 이벤트 전달됨
    >
      <svg viewBox="0 0 200 200" className="circular-text">
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
               m -75, 0
               a 75,75 0 1,1 150,0
               a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text>
          <textPath href="#circlePath" startOffset="0%">
            SEOUL GARDENING CLUB • SEOUL GARDENING CLUB •
          </textPath>
        </text>
      </svg>
      <span className="btn-label">{text}</span>
    </Tag>
  );
};

export default CircularBtn;
