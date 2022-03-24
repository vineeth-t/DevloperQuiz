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
  flex-wrap:wrap;
  justify-content: center;
  margin: 2rem;
`;
