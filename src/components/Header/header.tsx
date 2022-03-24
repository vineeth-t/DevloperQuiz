import { NavLeft, Header, NavRight } from "./header.style";
import { ProfileIcon, TrophyIcon } from "../svgs";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Header>
      <NavLeft>
        <Link to="/">
          <span>DevloperQuiz</span>
        </Link>
      </NavLeft>
      <NavRight>
        <ProfileIcon />
        <TrophyIcon />
      </NavRight>
    </Header>
  );
};
