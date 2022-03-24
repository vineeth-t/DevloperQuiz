import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Rules = styled.section`
  color: white;
  margin: auto;
  text-align: center;
  width: 600px;
  box-shadow: rgba(191, 255, 83, 0.5) 0px 22px 70px 4px;
  padding: 0 0 1rem 0;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;
export type Buttontypes={
    secondary?:string,
    next?:string
}
export const Button = styled.button<Buttontypes>`
  color: black;
  width:5rem;
  text-align:center;
  border-radius:0.5rem;
  background-color: var(--header-color);
  cursor: pointer;
  padding: 0.5rem;
  font-weight: 800;
  margin:1rem;
  ${(props)=>props.next==='next'&&css`
     position:absolute;
     right:1rem;
     background-color: transparent;
     border:none;
     color:var(--header-color);
     text-decoration:underline;
     font-size:large;
     &:hover{
       color:white;
     }
  `}
`;

export function Instructions({ setInstructions }: any) {
  return (
    <Rules>
      <h4>Instructions</h4>
      <ol>
        <li>Each question carry two marks for correct answer</li>
        <li>
          Two options will be given, out of two only one option is correct
        </li>
        <li>Answers to Questions are shown at the end of exam</li>
        <li>Don't refresh your page</li>
        <li>There's no going back to question once it is answered</li>
        <li>Results are saved in profile to self evaluate </li>
      </ol>
        <Button onClick={() => setInstructions(false)}>Proceed</Button>
        <Button secondary='secondary'>
          <Link to="/">Cancel</Link>
        </Button>
    </Rules>
  );
}
