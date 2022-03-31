import "./styles.css";
import { NavBar } from "./components/Header/header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Routes/Home/home";
import { QuizQuestions } from "./Routes/QuizQuestions/showQuizQuestions";
import { useEffect } from "react";
import axios from "axios";
import { useQuizContext } from "./Contexts/QuizContext/quizContextProvider";
import { Quiz } from "./data";

export default function App() {
  const { quizDispatch } = useQuizContext();
  useEffect(() => {
    (async () => {
      try {
        const {data:{quizDetails}} = await axios.get<{ quizDetails: Quiz }>(
          "https://quiz-backend.vineetht.repl.co/quizData"
        );
        console.log(quizDetails)
        quizDispatch({ type: "SET_QUIZ", payload:quizDetails });
      } catch (error) {
        console.log(error);
      }
    })();
  },[quizDispatch]);
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
