import { NavLeft, Header, NavRight } from "./header.style";
import { ProfileIcon, TrophyIcon } from "../svgs";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Contexts/AuthContext/authProvider";

export const NavBar = () => {
  const { login } = useAuthContext();
  return (
    <Header>
      <NavLeft>
        <Link to="/">
          <span>DevloperQuiz</span>
        </Link>
      </NavLeft>
      <NavRight>
        {login ? (
          <Link to="/profile">
            <ProfileIcon />
          </Link>
        ) : (
          <Link to="/login">
            <ProfileIcon />
          </Link>
        )}
        <TrophyIcon />
      </NavRight>
    </Header>
  );
};
