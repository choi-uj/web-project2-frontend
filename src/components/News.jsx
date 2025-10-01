// News
import React from "react";
import "./News.scss"
import CircularBtn from './CircularBtn';

function News() {
    return(
        <section className="news scroll-section">
            <div className="container">
                <h2>News</h2>
                <CircularBtn as="a" href="#news" text={<>전체보기</>}/>
                <ul className="news-li">
                   <li>
                        <a href="https://www.hani.co.kr/arti/area/capital/1152927.html" target="_blank" rel="noopener noreferrer">
                            <div className="n-img"><img src="./img/n01.png" alt="" /></div>
                            <div className="n-txt">
                                <strong>
                                    도시에서 정원 만들어요…경의선 숲길 청년 정원사들
                                </strong>
                                <p>
                                    폭염이 기승을 부린 지난 6일 오후 5시 서울 마포구 연남동의 경의선숲길. 시민과 함께 정원을 만드는 프로그램 ‘청년과 함께하는 경의선 가드닝 클럽’이 진행됐다. 검은색 원예 장갑을 낀 청년 30명이 구슬땀을 흘리며 잡초를 뽑았다. 가위를 든 이들은 웃자란 식물을 가지치기했다. 한편에 키 큰 잡초들이 수북이 쌓였다. 잡초들이 사라질수록 숲길 정원이 말끔해졌다.
                                    이날 친구랑 같이 클럽에 참여한 박효선(36)씨는 “자주 다니던 숲길인데 제가 이곳에 정원을 만든다니 설렌다”고 말했다. 박씨는 “도시에 정원이 많아져야 쉴 수 있는 공간이 늘어난다. 낯선 동네를 가더라도 공원에 정원이 있으면 잠시 멈춰 쉬고 갈 수 있다. 그런 공유공간을 만드는 작업을 한다는 점에서 보람을 느낀다”며 웃었다.
                                </p>
                            </div>
                            <div className="n-date">2024.08.09</div>
                            <button>View<br />More</button>
                        </a>
                   </li>
                   <li>
                        <a href="https://www.donga.com/news/Society/article/all/20240730/126190575/2" target="_blank" rel="noopener noreferrer">
                            <div className="n-img"><img src="./img/n02.jpg" alt="" /></div>
                            <div className="n-txt">
                                <strong>
                                    MZ가 직접 꾸민 한강 정원 구경 오세요
                                </strong>
                                <p>
                                    “내 손으로 꾸민 정원이 모두에게 전시된다고 하니 벌써 기대가 되네요.” 17일 오후 7시 서울 광진구 지하철 7호선 자양역 2번 출구로 나와 마주한 뚝섬한강공원. 이날 서울시가 뚝섬 인근 유휴부지에서 MZ세대(밀레니얼+Z세대) 시민들과 함께 정원을 만드는 참여형 프로그램인 ‘한강 가드닝클럽’의 첫 행사가 이곳에서 열렸다. 오전 내 비가 내린 흐린 날씨인데도 20, 30대 시민 20여 명이 퇴근을 마치고 천막 아래 속속 모였다.
                                </p>
                            </div>
                            <div className="n-date">2024.07.30</div>
                            <button>View<br />More</button>
                        </a>
                   </li>
                   <li>
                        <a href="https://magazine.brique.co/brq-news/architecture-classes-for-gardeners/" target="_blank" rel="noopener noreferrer">
                            <div className="n-img"><img src="./img/n03.jpg" alt="" /></div>
                            <div className="n-txt">
                                <strong>
                                    가드너를 위한 건축 수업…서가클, 건축과 조경의 관계성 워크샵 개최
                                </strong>
                                <p>
                                    건축가와 조경가는 어떤 관계인가. 건축이 마무리 될 무렵 남은 예산으로 정원을 꾸며 준공 검사를 받는 절차상 필요한 외주 파트너일까. 아니면 초기 공간을 설계하는 단계에서부터 함께 머리를 맞대고 자연친화적이면서도 완성도 높은 건축물을 만드는 공동 기획자인가.
                                </p>
                            </div>
                            <div className="n-date">2024.04.16</div>
                            <button>View<br />More</button>
                        </a>
                   </li>
                </ul>
            </div>
        </section>
    );
}

export default News;