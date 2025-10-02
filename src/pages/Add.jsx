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

    // 1. 입력값 유효성 검사
    const { username, password, title, content } = board;
    if (!username || !password || !title || !content) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // 2. 서버 요청 처리
    try {
      await axios.post(`${apiUrl}/web2_full`, board);
      alert("새 글이 등록되었습니다.");
      navigate('/review');
    } catch (err) {
      console.error(err);

      // 서버 연결 불가 (네트워크 오류 등)
      if (!err.response) {
        alert("서버에 연결할 수 없습니다. 인터넷 연결 또는 서버 상태를 확인해주세요.");
      } else {
        // 서버는 응답했지만 다른 이유로 실패
        alert("등록에 실패했습니다. 다시 시도해주세요.");
      }
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