import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseInfo from "./pages/CourseInfo";
import NotFound from "./sections/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coursesinfo" element={<CourseInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
