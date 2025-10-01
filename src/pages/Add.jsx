// Add.jsx
import React, { useState } from "react";
import "./Add.scss";

const Add = () => {
  const [board, setBoard] = useState({
    username: "",
    password: "",
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    setBoard(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="username"
        name="username"
        value={board.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={board.password}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="제목"
        name="title"
        value={board.title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="내용"
        name="content"
        value={board.content}
        onChange={handleChange}
      />
      <div className="add-btn">
        <button className="not-write" >삭제</button>
        <button className="write">수정</button>
      </div>
    </div>
  );
};

export default Add;