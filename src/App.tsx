import "./styles.css";
import { NavBar } from "./components/Header/header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Routes/Home/home";
import { QuizQuestions } from "./Routes/QuizQuestions/showQuizQuestions";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:id" element={<QuizQuestions />} />
      </Routes>
    </div>
  );
}
