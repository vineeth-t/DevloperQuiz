import axios from "axios";
import GoogleLogin from "react-google-login";
import styled from "styled-components";
import { setupAuthHeaderForServiceCalls } from "../../utils/headerAuthorization";

export const LoginDiv = styled.div`

  background-color:var(--header-color);
  width: 300px;
  height:150px;
  border-radius:1rem;
  padding:1rem;
  margin: 7rem auto;
  cursor:pointer;
  &:hover{
    box-shadow: var(--font-color) 0px 40px 40px 10px;
  }
`;
export type User={
  success:boolean,
  token:string,
  email:string,
  name:string
}
export const responseSuccess=async(response:any)=>{
const {data:{success,token,email,name}}=await axios.post<User>('https://quiz-backend.vineetht.repl.co/googleAuthenticate',{
  tokenId:response.tokenId
})
setupAuthHeaderForServiceCalls(token)
}
export const LoginViaGoogle = () => {
  return (
    <LoginDiv>
      <h3>Hi! use your Email-id to login</h3><br/>
      <GoogleLogin
        clientId="1023490359315-mdde4pigd1lnfs3ccd20hhp6a6asgc0s.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseSuccess}
        onFailure={() => console.log("")}
        cookiePolicy={"single_host_origin"}
      />
    </LoginDiv>
  );
};
