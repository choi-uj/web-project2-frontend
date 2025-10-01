// Project
import React from "react";
import "./Project.scss"

function Project() {
    const projectItems = [
        {
            title: "통합공간기획",
            description: "공간의 용도와 목적에 맞는 전체적인 레이아웃과 흐름을 설계합니다. 다양한 요소를 조화롭게 구성하여 최적의 공간 경험을 제공합니다."
        },
        {
            title: "주택조경",
            description: "개인 주거공간에 맞춘 맞춤형 정원 및 외부 환경을 설계합니다. 자연과 일상이 어우러지는 쾌적한 주거환경을 만듭니다."
        },
        {
            title: "상업조경",
            description: "매장, 카페, 오피스 등 상업 공간에 특화된 조경을 제공합니다. 브랜드 아이덴티티를 살리는 감각적인 외부 공간을 연출합니다."
        },
        {
            title: "공공프로젝트",
            description: "공원, 광장, 거리 등 시민을 위한 공공 공간을 기획하고 설계합니다. 누구나 머물고 즐길 수 있는 열린 공간을 지향합니다."
        },
        {
            title: "전시/팝업/콘텐츠",
            description: "문화 및 브랜드 콘텐츠를 담은 전시 및 팝업 공간을 창의적으로 연출합니다. 시선을 끄는 구성으로 강한 인상을 남기는 공간을 만듭니다."
        },
        {
            title: "공유정원",
            description: "커뮤니티를 위한 공동체 정원을 조성하여 함께 가꾸는 문화를 만듭니다. 도심 속 자연을 이웃과 나누는 새로운 그린 라이프 스타일을 제안합니다."
        }
    ];

    return(
        <section className="project scroll-section">
            <h2>Portfolio</h2>
            <ul className="pf-list">
                {projectItems.map((item, index) => (
                    <li key={index}>
                        <a href="/">{item.title}</a>
                        <div className="desc">{item.description}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Project;