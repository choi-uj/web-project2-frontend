// OmgRental.jsx
import React from "react";

function OmgRental() {
    return(
        <section className="omg-rental ">
            <h2>OMG 렌탈 서비스</h2>
            <p>폼을 작성해 주시면 메일로 견적서를 보내드립니다.</p>
            <p>< i className="ri-bard-fill"></i> : 작성필수</p>
            <ol>
                <li>
                    성함과 소속을 알려주세요.(ex-김OO/서울가드닝클럽)
                    < i className="ri-bard-fill"></i>
                    <input type="text" />
                </li>
                <li>
                    현장의 이름과 위치를 적어주세요.(ex-OO스테이/경기도 광주)
                    < i className="ri-bard-fill"></i>
                    <input type="text" />
                </li>
                <li>
                    어떤 공간에 OMG BOX 렌탈 서비스가 필요하신가요?
                    < i className="ri-bard-fill"></i>
                </li>
                <li>
                    식물 연출이 필요한 공간은 야외 / 실내 중 어떤 환경인가요?
                    < i className="ri-bard-fill"></i>
                </li>
                <li>
                    어떤 라인의 OMG BOX를 원하시나요?
                    < i className="ri-bard-fill"></i>
                </li>
                <li>
                    메탈 BOX를 선택하셨다면, 어떤 색상과 사이즈를 원하시나요?
                </li>
                <li>
                    재생플라스틱 BOX를 선택하셨다면, 어떤 색상과 사이즈를 원하시나요?
                </li>
                <li>
                    필요한 박스의 수량을 적어주세요.
                    < i className="ri-bard-fill"></i>
                    <p>(ex: 메탈 화이트 - 45 x 45 x H50 (cm) 5개, 재생플라스틱 그린 - 45 x 45 x H50 (cm) 10개)</p>
                </li>
                <li>
                    OMG 박스 + 식물 렌탈이 필요하신가요?
                    < i className="ri-bard-fill"></i>
                </li>
                <li>
                    견적서를 받으실 메일 주소를 남겨 주세요.
                    < i className="ri-bard-fill"></i>
                </li>
                <li>
                    메일 전송이 안될 경우, 메세지를 보낼 연락처를 남겨 주세요.
                    < i className="ri-bard-fill"></i>
                </li>
            </ol>
        </section>
    );
}

export default OmgRental;