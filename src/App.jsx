import react from 'react';
import 'remixicon/fonts/remixicon.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebHome from "./components/WebHome";
import Review from "./pages/Review";
import Add from "./pages/Add";
import Boards from "./pages/Boards";
import Updates from "./pages/Updates";

function App() {
  function NotFound() {
    return <div>404 페이지를 찾을 수 없습니다.</div>;
  }
  return (
    <>
        <BrowserRouter basename="/web-project2-frontend">
              <Routes>
                <Route path="http://74.220.48.0/24/" element={<WebHome />} />
                <Route path="http://74.220.48.0/24/review" element={<Review />}> 
                  <Route index element={<Boards />} />
                  <Route path="add" element={<Add />} />
                  <Route path="updates/:id" element={<Updates />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
