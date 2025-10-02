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
    const scrollToSection = (id) => {
    const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false); // 모바일 메뉴 닫기
        }
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
                     <li>
                        <button onClick={() => scrollToSection("about")}>About</button>
                     </li>
                     <li>
                        <button onClick={() => scrollToSection("contact")}>Contact</button>
                         <ul className="dep2">
                            <li><button onClick={() => scrollToSection("contact")}>맞춤형 디자이너 설계</button></li>
                            <li><button onClick={() => scrollToSection("contact")}>그린 스페이스 & 콘텐츠 통합 솔루션</button></li>
                         </ul>
                     </li>
                     <li>
                        <button onClick={() => scrollToSection("project")}>Project</button>
                        <ul className="dep2">
                            <li><button onClick={() => scrollToSection("project")}>통합공간기획</button></li>
                            <li><button onClick={() => scrollToSection("project")}>주택조경</button></li>
                            <li><button onClick={() => scrollToSection("project")}>상업조경</button></li>
                            <li><button onClick={() => scrollToSection("project")}>공공프로젝트</button></li>
                            <li><button onClick={() => scrollToSection("project")}>전시 / 팝업 / 컨텐츠</button></li>
                            <li><button onClick={() => scrollToSection("project")}>공유정원</button></li>
                        </ul>
                     </li>
                     <li>
                        <button onClick={() => scrollToSection("news")}>News</button>
                     </li>
                     <li>
                        <button onClick={() => scrollToSection("product")}>Product</button>
                     </li>
                 </ul>
             </nav>
           </div>
        </header>
    );
}

export default Header;