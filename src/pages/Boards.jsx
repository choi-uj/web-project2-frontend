// Boards.jsx
import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Add from "./Add";
import Updates from "./Updates";
import './Boards.scss';

const Boards = ()=>{
  const [ boards, setBoards ] = useState([]);

    useEffect(() => {
      const fetchAllBoards = async () => {
        try {
          const res = await axios.get("http://localhost:8500/web2_full");
          console.log("fetched boards:", res.data); // 응답 확인
          setBoards(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAllBoards();
    }, []);

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
          <div className="boards">
              {boards.map(boards=>(
                <div className="new-board" key={boards.id}>
                   <div className="review-title"> 
                    <h3>{boards.username}</h3> <h4>{boards.title}</h4>
                   </div>
                   <p className="review-text">{boards.content}</p>
                   <div className="review-btn">
                      <button className="delete" onClick={()=> handleDelete(boards.id)} >삭제</button>
                      <button className="updates"><Link to={`/updates/${boards.id}`}> 수정</Link></button>
                   </div>
                 </div>
              ))}
            </div> 
        </>
    )
}

export default Boards;