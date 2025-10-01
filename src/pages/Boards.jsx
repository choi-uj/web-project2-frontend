// Boards.jsx
import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Add from "./Add";
import Updates from "./Updates";
import './Boards.scss';

const Boards = ()=>{
  const [ boards, setBoards ] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

    useEffect(() => {
      const fetchAllBoards = async () => {
        try {
          const res = await axios.get(`${apiUrl}/web2_full`);
          // console.log("fetched boards:", res.data); // 응답 확인
          setBoards(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAllBoards();
    }, []);

    const handleDelete = async (id) => {
  if (!window.confirm("정말 삭제하시겠습니까?")) return; // 확인 취소 시 함수 종료
  try {
    await axios.delete(`${apiUrl}/web2_full/${id}`);
    setBoards(boards.filter(board => board.id !== id));
  } catch (err) {
    console.log(err);
  }
};

    return(
        <>
          <div className="boards">
              {boards.map(board=>(
                <div className="new-board" key={board.id}>
                   <div className="review-title"> 
                    <h3>{board.username}</h3> <h4>{board.title}</h4>
                   </div>
                   <p className="review-text">{board.content}</p>
                   <div className="review-btn">
                      <button className="delete" onClick={()=> handleDelete(board.id)} >삭제</button>
                      <button className="updates" onClick={() => navigate(`/review/updates/${board.id}`)}>수정</button>
                   </div>
                 </div>
              ))}
            </div> 
        </>
    )
}

export default Boards;