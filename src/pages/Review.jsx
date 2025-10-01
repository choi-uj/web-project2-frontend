// Review.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import Boards from "./Boards";
import Add from "./Add";
import Updates from "./Updates";
import './Review.scss';
import CircularBtn from "../components/CircularBtn";
import Header from "../components/Header";
import "../components/css/reset.css";
import "../components/css/main.css";
import "../components/css/font.css";

const Review = ()=>{
    const [ boards, setBoards ] = useState([]);

    useEffect(()=>{
       const fetchAllBoards = async()=>{
        try{
          const res = await axios.get("http://localhost:8500/web2_full");
          setBoards(res.data);
        }catch(err){
            console.log(err)
        }
       }
       fetchAllBoards();
    },[])

     const handleDelete = async(id)=>{
      try {
        await axios.delete(`http://localhost:8500/web2_full/${id}`);
        setBoards(boards.filter(board => board.id !== id));  // 화면 갱신
    } catch (err) {
        console.log(err);
    }
    }

    return(
        <>
          <Header />
          <section className='review'>
            <div className='review-name'>
              <h2> Review </h2>
              <Link to="add"><CircularBtn text={<>글쓰기</>}/></Link>
            </div>
            <div className="review-content">
              <Outlet /> 
            </div>
          </section>
        </>
    )
}
// const values = [req.body.username, req.body.password, req.body.title, req.body.content];
export default Review;