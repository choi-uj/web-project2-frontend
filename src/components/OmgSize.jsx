// OmgSize.jsx
import React from "react";

function OmgSize() {
    return(
        <section className="omgsize">
            <h2>OMG 사이즈별 금액</h2>
            <ol className="omg-text">
                <li>메탈 BOX 색상과 사이즈별 금액 (월 대여료 기준)
                    <div className="omg-size">
                        <div>
                            화이트 - 45 x 45 x H50 (cm) <br />
                            화이트 - 90 x 45 x H50 (cm) <br />
                            블랙 - 45 x 45 x H50 (cm) <br />
                            블랙 - 90 x 45 x H50 (cm)
                        </div>
                        <div>
                            1,500원 <br />
                            2,500원 <br />
                            1,500원 <br />
                            2,000원 
                        </div>
                    </div>
                </li>
                <li>메탈 BOX 색상과 사이즈별 금액 (월 대여료 기준)
                    <div className="omg-size">
                        <div>
                            화이트 - 45 x 45 x H50 (cm) <br />
                            화이트 - 90 x 45 x H50 (cm) <br />
                            블랙 - 45 x 45 x H50 (cm) <br />
                            블랙 - 90 x 45 x H50 (cm)
                        </div>
                        <div>
                            1,500원 <br />
                            2,500원 <br />
                            1,500원 <br />
                            2,000원 
                        </div>
                    </div>
                </li>
                <li>재생플라스틱 BOX 색상과 사이즈별 금액 (월 대여료 기준)
                    <div className="omg-size">
                        <div>
                            레드 - 30 x 30 x H35 (cm) <br />
                            옐로 - 60 x 30 x H35 (cm) <br />
                            블루 - 60 x 30 x H35 (cm) <br />
                            그린 - 45 x 45 x H50 (cm) <br />
                            화이트믹스 - 45 x 45 x H50 (cm)
                        </div>
                        <div>
                            2,000원 <br />
                            4,500원 <br />
                            4,500원 <br />
                            3,500원 <br />
                            3,500원 
                        </div>
                    </div>
                </li>
                <li>식물 추가 금액 <span>※ 식물 종류에 따라 가격 상이</span>
                    <div className="omg-size">
                        <div>
                            박스만 렌탈 <br />
                            박스 + 식물 세트로 렌탈
                        </div>
                        <div>
                            + 0원 <br />
                            + 1,000원
                        </div>
                    </div>
                </li>
            </ol>
        </section>
    );
}

export default OmgSize;