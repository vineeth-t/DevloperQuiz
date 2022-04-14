import axios from "axios";
import { setupAuthHeaderForServiceCalls } from "./headerAuthorization";

export type User = {
    success: boolean;
    token: string;
    email: string;
    name: string;
  };
export const responseSuccess = async (response: any, setLogin: Function,navigate:Function) => {
    const {
      data: { success, token, email, name },
    } = await axios.post<User>(
      "https://quiz-backend.vineetht.repl.co/googleAuthenticate",
      {
        tokenId: response.tokenId,
      }
    );
    localStorage.setItem(
      "loginDetails",
      JSON.stringify({ success, token, email, name })
    );
    setLogin(true);
    setupAuthHeaderForServiceCalls(token);
    navigate('/profile')
  };