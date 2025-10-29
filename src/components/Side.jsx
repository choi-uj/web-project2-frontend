import React from "react";
import './Side.scss'
import Review from '../pages/Review';
import { Routes, Route, Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom"; 

function Side() {
    const navigate = useNavigate(); // 새로운 페이지로 이동하기 위해 navigate 사용

    // 새 창에서 Review 페이지 열기
    const openReviewPage = () => {
        window.open('/Review', '_blank'); // '/Review' 경로로 새 창 열기
    };

    return(
         <div className="side">
             <div className="side-menu">
                 <button onClick={() => window.open('https://www.instagram.com/seoul_gardening_club/', '_blank')} className="tooltip">
                     <i className="ri-instagram-line"></i>
                 </button>
                 <button onClick={() => window.open('http://pf.kakao.com/_xjxcEDn', '_blank')} className="tooltip">
                     <i className="ri-chat-smile-ai-line"></i>
                 </button>
                 
                 <Link to="/Review" target="_blank">
                     <button>
                         < i className="ri-message-2-line"></i>
                     </button>
                 </Link>
             </div>
             <button className="side-home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                 <i className="ri-arrow-up-s-line"></i>
             </button>
         </div>
    );
}

export default Side;