import axios from "axios";
export function setupAuthHeaderForServiceCalls(token:string) {
  if (token) {
      console.log('success')
    return (axios.defaults.headers.common["Authorization"] = token);
  }
  delete axios.defaults.headers.common["Authorization"];
}
// }
// export function setupAuthExceptionHandler(logoutHandler, navigate, authDispatch) {
//   const UNAUTHORIZED = 401;
//   axios.interceptors.response.use((response) => response,
//     (error) => {
//       if (error?.response?.status === UNAUTHORIZED) {

//         logoutHandler(authDispatch);
//         navigate("/login");
//       }
//       return Promise.reject(error);
//     }
//   );
// }
