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
export const Option=styled.label<{ optionSelected: boolean }>`
${({ optionSelected }) => {
  if (optionSelected) {
    return 'background-color: var(--header-color)';
  }
  return 'background-color: black';
}}
padding:0.5rem 0.5rem;
margin:1rem;
&:hover{
  background-color:var(--header-color);
  color:black;
}
`