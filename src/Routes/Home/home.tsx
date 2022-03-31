import { QuizList, QuizCard } from "./home.style";
import { Link } from "react-router-dom";
import { useQuizContext } from "../../Contexts/QuizContext/quizContextProvider";
export function ListOfQuizes() {
  const{quizState:{quizDetails}}=useQuizContext();
  return (
    <QuizList>
      {quizDetails?.listOfQuizes?.map(({ _id, imageUrl }) => (
        <Link to={`/quiz/${_id}`}>
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
