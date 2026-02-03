import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseInfo from "./pages/CourseInfo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coursesinfo" element={<CourseInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
