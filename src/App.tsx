import "./styles.css";
import { NavBar } from "./components/Header/header";
import { quizDetails } from "./data";
import styled from "styled-components";
export const QuizCard = styled.div`
  padding: 1rem;
  border: 1px solid white;
  border-radius: 1rem;
  text-align: center;
  margin: 1rem;
  width: 15rem;
  height: 10rem;
  &:hover {
    background-color: black;
  }
`;
export const QuizList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;
export function ListOfQuizes() {
  return (
    <QuizList>
      {quizDetails.listOfQuizes.map(({ id, imageUrl }) => (
        <QuizCard>
          <img width="150px" src={imageUrl} alt="quizimage" />
        </QuizCard>
      ))}
    </QuizList>
  );
}

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <ListOfQuizes />
    </div>
  );
}
