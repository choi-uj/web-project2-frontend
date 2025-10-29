// Footer
import React from "react";
import "./Footer.scss";

function Footer() {
    return(
        <footer id="footer">
            <div className="container">
                <div className="footer-logo"><img src="/img/footer-logo2.png" alt="로고" /></div>
                <div className="footer-txt">
                    <address>
                        (주)그린디벨롭먼트<br />
                        <div className="footer-contact">
                            <span>Office</span> &nbsp;서울특별시 강남구 논현로24길 37, 201호 
                            <div className="footer-full"> (우 : 06300)</div>
                            <div className="footer-half"><br/>(우 : 06300)</div><br />
                            <span>대표</span>&nbsp; 이가영
                            <span>&nbsp; | &nbsp;   Tel </span> 010-4360-4301
                            <span  className="footer-full">&nbsp; | &nbsp;  E-mail </span>
                            <span className="footer-half"><br/>E-mail </span>
                            we@seoulgardeningclub.com<br />
                            <span >사업자번호</span>&nbsp; 897-87-02534 
                            <span className="footer-full">&nbsp; | &nbsp;  통신판매업신고번호</span>
                            <span className="footer-half"><br/>통신판매업신고번호 </span>
                            &nbsp; 제 2023-서울강남-01931호
                        </div>
                    </address>
                    <div className="footer-under">
                        <div className="footer-menu">
                            <a href="#">개인정보처리방침</a>
                            <a href="#">이용약관</a>
                        </div>
                        <p className="copyright">
                            Copyright &copy; (주)그린디벨롭먼트 All Rights 
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;