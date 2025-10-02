// About.jsx
import React, { useRef, useState, useEffect } from "react";
import "./About.scss";
import CircularBtn from "./CircularBtn";

function About() {
    const [showSecondPage, setShowSecondPage] = useState(false);

    const handleToggle = () => {
        setShowSecondPage(prev => !prev);
    };

    return (
        <section id="about" className=" scroll-section">
          <div className="about-inner">
                {/* Toggle Button */}
                <button className="about-toggle-btn" onClick={handleToggle}>
                    {showSecondPage ? 
                    < i className="ri-arrow-left-double-line"></i> : 
                    < i className="ri-arrow-right-double-line"></i>}
                </button>
                <div className={`about-pages ${showSecondPage ? "show-second" : ""}`}>
                    {/* Page 1 */}
                    <div className="about-page about-page-1">
                        <div className="about-menu">
                            <div className="about-h">
                            <h2>Green<br />Developer</h2>
                            <p>도시 라이프스타일로서의 정원을 개발합니다</p>
                            </div>
                            {/* <div className="about-link">
                            <CircularBtn as="a" href="#product" text={<>맞춤형<br />디자이너<br />설계</>} />
                            <CircularBtn as="a" href="#product" text={<>그린<br />스페이스 &<br />콘텐츠 통합<br />솔루션</>} />
                            </div> */}
                        </div>
                    
                        <div className={`about-a ${!showSecondPage ? "" : "active"}`}>
                            <div className="about-round">Green<br />Space<span>도시환경에 적합한<br />정원설계 및 시공</span></div>
                            <div className="a-center">
                            <div className="about-round">Green<br />Lifestyle<span>정원에 기반한<br />경험-콘텐츠 개발</span></div>
                            <h3>SEOUL<br />GARDENING<br />CLUB</h3>
                            </div>
                            <div className="about-round">Green<br />Research<span>정원을 통한<br />공간 솔루션 연구</span></div>
                        </div>
                    </div>
                    
                    {/* Page 2 */}
                    <div className="about-page about-page-2">
                        <div className="about-b">
                            <div className="about-round">Labor!<span>자연과 연결되는<br />참된 노동</span></div>
                            <div className="b-center">
                            <h3>Labor!<br />Work!<br />Action!</h3>
                            <div className="about-round">Work!<span>자신의 정체성을<br />도시와 공간에<br />표현하는 작업</span></div>
                            </div>
                            <div className="about-round">Action!<span>도시의 환경과<br />공동체에 미치는<br />선한 영향력</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
