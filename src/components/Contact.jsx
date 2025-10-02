// Contact
import React, { useState } from "react";
import "./Contact.scss";
import CircularBtn from "./CircularBtn";

function Contact() {
    const [step, setStep] = useState(1); // 현재 활성화된 단계 (1~6)

    const handleStepChange = (stepNumber) => {
        setStep(stepNumber);
    };

    return(
        <section id="contact" className=" scroll-section">
            <div className="cont-txt">
                <div className="contact-main">
                    <h2>Design-Build<br />Process</h2>
                    <div className="process-btn">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <a
                            key={num}
                            href="#!"
                            className={step === num ? "active" : ""}
                            onClick={() => handleStepChange(num)}
                        >
                        </a>
                    ))}
                </div>
                </div>
                    {step === 1 && (
                        <div className="process cont-1p">
                            <div className="contact-btn">
                                <CircularBtn
                                    as="a" href="#!"
                                    text={<>Step1.<br /> 사전안내</>}
                                    onClick={() => setStep(2)} // ✅ 이 줄 추가
                                />
                            </div>
                            <ul>
                                <li>사전질문지 작성 및 제출</li>
                                <li>전화상담</li>
                                <li>현장미팅 스케줄 조율</li>
                            </ul>
                        </div>
                    )} {step === 2 && (
                        <div className="process cont-2p">
                            <div className="contact-btn">
                                <CircularBtn
                                    as="a" href="#!"
                                    text={<>Step 2.<br />현장방문<br />및 상담</>}
                                    onClick={() => setStep(3)}
                                />
                            </div>
                            <ul>
                                <li>현장미팅 및 상담</li>
                                <li>현장도면 수령</li>
                                <li>예상 견적 전달</li>
                            </ul>
                        </div>
                    )} {step === 3 && (
                        <div className="process cont-3p">
                            <div className="contact-btn">
                                <CircularBtn
                                    as="a" href="#!"
                                    text={<>Step 3.<br />계약확정</>}
                                    onClick={() => setStep(4)}
                                />
                            </div>
                            <ul>
                                <li>계약서 서명완료</li>
                                <li>선금 정산</li>
                            </ul>
                        </div>
                    )} {step === 4 && (
                        <div className="process cont-4p">
                            <div className="contact-btn">
                                <CircularBtn
                                    as="a" href="#!"
                                    text={<>Step 4.<br />디자인</>}
                                    onClick={() => setStep(5)}
                                />
                            </div>
                            <ul>
                                <li>사이트 분석</li>
                                <li>1차 디자인 전달</li>
                                <li>디자인 수정 2회</li>
                            </ul>
                        </div>
                    )} {step === 5 && (
                    <div className="process cont-5p">
                        <div className="contact-btn">
                            <CircularBtn
                                as="a" href="#!"
                                text={<>Step 5.<br />조성 및<br />시공</>}
                                onClick={() => setStep(6)}
                            />
                        </div>
                        <ul>
                            <li>시공 예산 조율 및 확정</li>
                            <li>현장 이슈 체크</li>
                            <li>공사도면 작성</li>
                            <li>구조공사 및 식재</li>
                        </ul>
                    </div>
                    )} {step === 6 && (
                    <div className="process cont-6p">
                        <div className="contact-btn">
                            <CircularBtn
                                as="a" href="#!"
                                text={<>Step 6.<br />완료 후<br />모니터링</>}
                                onClick={() => setStep(1)}
                            />
                        </div>
                        <ul>
                            <li>기본 관리 매뉴얼 전달</li>
                            <li>2개월 내 2회 모니터링 및 하자 보수</li>
                            <li>필요에 따라 별도 관리 계약</li>
                        </ul>
                    </div>
                    )}
             </div>
             <div className="cont-img">
                <img src={`./comfyui/ai-0${step}.png`} alt={`ai image ${step}`} />
             </div>
        </section>
    );
}

export default Contact;