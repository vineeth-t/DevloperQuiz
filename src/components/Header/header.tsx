import { NavLeft, Header, NavRight } from "./header.style";
import { ProfileIcon, TrophyIcon } from "../svgs";

export const NavBar = () => {
  return (
    <Header>
      <NavLeft>DevloperQuiz</NavLeft>
      <NavRight>
        <ProfileIcon />
        <TrophyIcon />
      </NavRight>
    </Header>
  );
};
