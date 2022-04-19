import GoogleLogin from "react-google-login";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuthContext } from "../../Contexts/AuthContext/authProvider";
import { responseSuccess } from "../../utils/googleResponse";

export const LoginDiv = styled.div`
  background-color: var(--header-color);
  width: 300px;
  height: 150px;
  border-radius: 1rem;
  padding: 1rem;
  margin: 7rem auto;
  cursor: pointer;
  &:hover {
    box-shadow: var(--font-color) 0px 40px 40px 10px;
  }
`;

export const LoginViaGoogle = () => {
  const { login, setLogin } = useAuthContext();
  const navigate = useNavigate();
  console.log({ login });
  return (
    <>
      {login ? (
        <Navigate to="/profile" />
      ) : (
        <LoginDiv>
          <h3>Hi! use your Email-id to login</h3>
          <br />
          <GoogleLogin
            clientId="1023490359315-mdde4pigd1lnfs3ccd20hhp6a6asgc0s.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={(response) =>
              responseSuccess(response, setLogin, navigate)
            }
            onFailure={() => console.log("")}
            cookiePolicy={"single_host_origin"}
          />
        </LoginDiv>
      )}
    </>
  );
};
