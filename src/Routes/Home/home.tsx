import { QuizList, QuizCard } from "./home.style";
import { quizDetails } from "../../data";
import { Link } from "react-router-dom";
export function ListOfQuizes() {
  return (
    <QuizList>
      {quizDetails.listOfQuizes.map(({ id, imageUrl }) => (
        <Link to={`/quiz/${id}`}>
          <QuizCard>
            <img width="150px" src={imageUrl} alt="quizimage" />
          </QuizCard>
        </Link>
      ))}
    </QuizList>
  );
}

export function Home() {
  return <ListOfQuizes />;
}
