// Review.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import CircularBtn from "../components/CircularBtn";
import './Review.scss';
import Header from "../components/Header";
import Side from "../components/Side";
import "../components/css/reset.css";
import "../components/css/main.css";
import "../components/css/font.css";

const Review = ()=>{
    const [ boards, setBoards ] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;
    

    useEffect(()=>{
       const fetchAllBoards = async()=>{
        try{
          const res = await axios.get(`${apiUrl}/web2_full`);
          setBoards(res.data);
        }catch(err){
            console.error('API 호출 에러:', err);
        }
       }
       fetchAllBoards();
    },[apiUrl])

     const handleDelete = async(id)=>{
      try {
        await axios.delete(`${apiUrl}/web2_full/${id}`);
        setBoards(boards.filter(board => board.id !== id));  // 화면 갱신
    } catch (err) {
        console.error('삭제 에러:', err);
    }
    }
    if (!boards) return <div>Loading...</div>;

    return(
        <>
          <Header />
          <Side/>
          <section className='review'>
            <div className='review-name'>
              <h2> Review </h2>
              <Link to="add"><CircularBtn text={<>글쓰기</>}/></Link>
            </div>
            <div className="review-content">
              <Outlet context={{ boards, handleDelete }}/> 
            </div>
          </section>
        </>
    );
}

export default Review;