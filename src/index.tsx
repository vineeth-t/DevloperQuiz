import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizContextProvider } from "./Contexts/QuizContext/quizContextProvider";
import { AuthenticationProvider } from "./Contexts/AuthContext/authProvider";
const rootElement = document.getElementById("root");
render(
  <Router>
    <AuthenticationProvider>
  <QuizContextProvider>
      <App />
  </QuizContextProvider>
  </AuthenticationProvider>
  </Router>,
  rootElement
);
