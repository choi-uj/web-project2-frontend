// Updates.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Updates.scss"; 

const Updates = () => {
  const { id } = useParams();  // URL에서 게시글 ID 추출
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

    const [board, setBoard] = useState({
        username: "",
        password: "",
        title: "",
        content: ""
    });

      // 게시글 데이터 불러오기
    useEffect(() => {
        const fetchPost = async () => {
        try {
            const res = await axios.get(`${apiUrl}/web2_full/${id}`);
            setBoard(prev => ({
            ...prev,
            ...res.data,
            password: ""  // 비밀번호는 빈 문자열로 초기화
            }));
        } catch (err) {
            console.error("게시글 불러오기 실패:", err);
            alert("게시글을 불러오지 못했습니다.");
            navigate(-1); // 이전 페이지로 이동
        }
        };

        fetchPost();
    }, [id, apiUrl, navigate]);

    // 입력값 변경 처리
    const handleChange = (e) => {
        setBoard(prev => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    };

    // 수정 요청
    const handleUpdate = async (e) => {
    e.preventDefault();
    try {
        // 서버가 password도 함께 받아서 확인하도록 설계되어 있어야 함
        await axios.put(`${apiUrl}/web2_full/${id}`, board);
        alert("게시글이 수정되었습니다.");
        navigate('/review');
    } catch (err) {
        console.error("수정 실패:", err);
        if (err.response?.status === 403) {
        alert("비밀번호가 일치하지 않습니다.");
        } else {
        alert("게시글 수정에 실패했습니다.");
        }
    }
    };
  // 로딩 처리: username이 없으면 로딩중 표시
  if (!board.username) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="reform">
      <div className="reform-name">
        <input
          type="text"
          placeholder="username"
          name="username"
          value={board.username || ""}
          onChange={handleChange}
          disabled // 일반적으로 수정 금지
        />
        <input
            type="password"
            placeholder="비밀번호 확인"
            name="password"
            value={board.password || ""}
            onChange={handleChange}
        />
      </div>
      
      <input
        type="text"
        placeholder="제목"
        name="title"
        value={board.title || ""}
        onChange={handleChange}
        required
      />
      <textarea
        type="text"
        placeholder="내용"
        name="content"
        value={board.content || ""}
        onChange={handleChange}
        required
      />
      <div className="re-btn">
        <button className="not-write" onClick={() => navigate(-1)} >취소</button>
        <button className="re-write" onClick={handleUpdate}>수정</button>
      </div>
    </div>
  );
};

export default Updates;