import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizContextProvider } from "./Contexts/QuizContext/quizContextProvider";
const rootElement = document.getElementById("root");
render(
  <QuizContextProvider>
    <Router>
      <App />
    </Router>
  </QuizContextProvider>,
  rootElement
);
