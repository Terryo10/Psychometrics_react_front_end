import {loginService} from "../service/auth_service";

export const login = (credentials, history) => {
    return (dispatch) => {
        console.log(credentials)
      if (credentials.password.length < 6) {
        let message = "Your password is too short";
        return dispatch({ type: "ERROR", message });
      }
      try {
        loginService(credentials, history).then(
          (res) => {
            console.log(res);
  
            if (res.status !== 200) {
              console.log("kkk");
              dispatch({ type: "WARNING", res });
            } else if (res.data.success !== undefined) {
             
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("user", JSON.stringify(res.data.user));
              dispatch({ type: "LOGIN_SUCCESS" });
              dispatch({ type: "WARNING", res });
            } else {
              dispatch({ type: "LOGIN_ERROR", res });
              dispatch({ type: "ERROR", res });
            }
          },
          (error) => {
            console.log("kkkk");
            dispatch({ type: "CODE_ERROR", error });
          }
        );
      } catch (e) {
        dispatch({ type: "CODE_ERROR", e });
        dispatch({ type: "WARNING", e });
      }
    };
  };

  export const logout = (history) => {
    localStorage.clear();
    history.props.history.push("/login");
  };