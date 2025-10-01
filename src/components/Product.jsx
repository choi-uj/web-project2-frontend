// Product
import React from "react";
import "./Product.scss";
import img1 from "/img/rt-05.jpg";
import img2 from "/img/rt-06.jpg";
import img3 from "/img/rt-01.jpg";
import img4 from "/img/rt-11.jpg";
import img5 from "/img/rt-04.jpg";
import img6 from "/img/rt-02.jpg";
import CircularBtn from "./CircularBtn";
// import "./OmgSize";

function Product() {
    const images = [
        { src: img1, row: 3, col: 2 },
        { src: img2, row: 2, col: 2 },
        { src: img3, row: 3, col: 2 },
        { src: img4, row: 2, col: 2 },
        { src: img5, row: 2, col: 2 },
        { src: img6, row: 2, col: 3 }
    ];

    return(
        <section className="product scroll-section">
            <div className="container">
                <div className="omg-int">
                    <div className="omg-txt">
                        <h2>Product</h2>
                        <p>
                            전시가 끝나고 버려지는 폐기물이 걱정되셨다면,<br />
                            지속가능한 플랜테리어를 위한 솔루션<br />
                            [OMG 렌탈 서비스]를 이용해 보세요.
                        </p>
                    </div>
                    {/* <div className="omg-btn">
                        <CircularBtn as="a" href="#product" text="렌탈 상담"/>
                        <CircularBtn as="a" href="#product" text="사이즈별 금액"/>
                    </div> */}
                </div>
                <div className="omg-img">
                    {images.map((img, index) => (
                        <div
                            className="grid-item"
                            key={index}
                            style={{
                                gridRowEnd: `span ${img.row}`,
                                gridColumnEnd: `span ${img.col}`,
                            }}
                        >
                            <img src={img.src} alt={`img-${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Product;