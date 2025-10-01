// Updates.jsx
import React from "react";

const Updates = () => {
    const { id } = useParams();  // id 받아오기
    useEffect(() => {
        // 해당 id로 데이터를 불러와서 업데이트
    }, [id]);

    return <div>Update page for id {id}</div>;
};

export default Updates;