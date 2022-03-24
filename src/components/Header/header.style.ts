import styled, { keyframes } from "styled-components";
export const animate = keyframes`
 0%{
    transform:scale(2,2);
    color:black
  }
  25%{
    transform:scale(1.75,1.75)
    color:white
  }
  75%{
    transform:scale(1.5,1.5)
    color:black
  }
  100% {
    transform:scale(1,1)
    color:white
  }

`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--header-color);
  padding: 0.5rem;
  width:100%;
  @media screen and (max-width:765px){
  
  }
`;
export const NavLeft = styled.div`
  font-weight: 800;
  animation: ${animate} 3s ease-in-out;

`;
export const NavRight = styled.div`
  display: flex;
  align-items: center;
  animation: ${animate} 3s ease-in-out;
`;
