// Add.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Add.scss";

const Add = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const [board, setBoard] = useState({
    username: "",
    password: "",
    title: "",
    content: ""
  });
  // console.log("board:", board);

  const handleChange = (e) => {
    setBoard(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiUrl}/web2_full`, board);
      alert("새 글이 등록되었습니다.");
      navigate('/review'); 
    } catch (err) {
      console.error(err);
      alert("등록에 실패했습니다.");
    }
    
  };


  return (
    <div className="form">
      <div className="form-name">
        <input
          type="text"
          placeholder="username"
          name="username"
          value={board.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={board.password}
          onChange={handleChange}
          required
        />
      </div>
      
      <input
        type="text"
        placeholder="제목"
        name="title"
        value={board.title}
        onChange={handleChange}
        required
      />
      <textarea
        type="text"
        placeholder="내용"
        name="content"
        value={board.content}
        onChange={handleChange}
        required
      />
      <div className="add-btn">
        <button className="not-write" onClick={() => navigate(-1)} >취소</button>
        <button className="write" onClick={handleSubmit}>작성</button>
      </div>
    </div>
  );
};

export default Add;