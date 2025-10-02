// WebHome.jsx
import React, { useEffect } from "react";
import "./css/reset.css";
import "./css/main.css";
import "./css/font.css";
import Header from "./Header";
import MainVisual from "./MainVisual";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import News from "./News";
import Product from "./Product";
import Footer from "./Footer";
import Side from "./Side";
import CircularBtn from './CircularBtn';
import "./WebHome.scss";

function WebHome() {
    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                console.log("감지됨:", entry.target, entry.isIntersecting);
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
            });
        },
        {
            threshold: 0.1,
        }
        );

        const sections = document.querySelectorAll(".scroll-section");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return(
        <>
            <Header />
            <Side />
            <MainVisual />
            <About />
            <Project />
            <Contact />
            <News />
            <Product />
            <Footer />
        </>
    );
}

export default WebHome;