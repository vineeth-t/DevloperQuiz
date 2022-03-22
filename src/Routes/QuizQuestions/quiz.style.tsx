import styled from "styled-components";
export const QuestionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin: 1rem;
`;
export const Options = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Option = styled.div`
  border: 1px solid white;
  padding: 0.5rem 1rem;
  margin: 1rem;
  background-color: ${(props: any) =>
    props.selectedOption ? "var(--header-color)" : "transparent"};
  color: ${(props: any) => (props.selectedOption ? "black" : "white")};
  &:hover {
    background-color: var(--header-color);
    color: black;
  }
`;
