// Header.jsx
import React, { useEffect, useState } from "react";
import "./Header.scss";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ 메뉴 토글 상태

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return(
        <header id="header" className={isScrolled ? "scrolled" : ""}>
           <div className="container">
                <h1><a href="/"><span className="visually-hidden">서울 가드닝 클럽</span></a></h1>
            {/* ✅ 토글 버튼 */}
            <button className={`menu-toggle  ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
                <i className="ri-arrow-down-s-line"></i> {/* 아이콘 고정 */}
            </button>
            {/* ✅ 메뉴 열림 여부에 따라 클래스 추가 */}
             <nav id="gnb" className={isMenuOpen ? "open" : ""} >
                 <ul className="dep1">
                     <li><a href="/">About</a>
                     </li>
                     <li><a href="/">Contact</a>
                         <ul className="dep2">
                             <li><a href="/">맞춤형 디자이너 설계</a></li>
                             <li><a href="/">그린 스페이스 &<br /> 콘텐츠 통합 솔루션</a></li>
                         </ul>
                     </li>
                     <li><a href="/">Project</a>
                         <ul className="dep2">
                             <li><a href="/">통합공간기획</a></li>
                             <li><a href="/">주택조경</a></li>
                             <li><a href="/">상업조경</a></li>
                             <li><a href="/">공공프로젝트</a></li>
                             <li><a href="/">전시 / 팝업 / 컨텐츠</a></li>
                             <li><a href="/">공유정원</a></li>
                         </ul>
                     </li>
                     <li><a href="/">News</a>
                     </li>
                     <li><a href="/">Product</a>
                     </li>
                 </ul>
             </nav>
           </div>
        </header>
    );
}

export default Header;