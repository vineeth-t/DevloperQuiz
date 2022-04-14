import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../Contexts/AuthContext/authProvider";

export const PrivateRoute: React.FC<{ children: JSX.Element }> = ({children}) => {
  const { login } = useAuthContext();
  const location=useLocation();
  console.log(login,location)
  return (
    <>
      {login ? (
        children
      ) : (
        <Navigate state={{from:location}} to='/login' />
      )}
    </>
  );
};
