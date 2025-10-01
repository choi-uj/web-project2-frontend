import react from 'react';
import 'remixicon/fonts/remixicon.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebHome from "./components/WebHome";
import Review from "./pages/Review";
import Add from "./pages/Add";
import Boards from "./pages/Boards";
import Updates from "./pages/Updates";

function App() {
  return (
    <>
        <BrowserRouter>
              <Routes>
                <Route path="/" element={<WebHome />} />
                <Route path="/review" element={<Review />}> 
                  <Route index element={<Boards />} />
                  <Route path="add" element={<Add />} />
                  <Route path="updates/:id" element={<Updates />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
