import { Fullbody, Box1, Button, Registra } from "./component/style/apps";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [uemail, setuemail] = useState("");
  const [upassword, setupassword] = useState("");
  const [aemail, setemail] = useState("");
  const [apassword, setpassword] = useState("");

  const register = () => {
    Axios.post("http://localhost:3300/auth/signup", {
      email: uemail,
      password: upassword,
    }).then((response) => {
      console.log(response);
    });
  };

  const Login = () => {
    Axios.post("http://localhost:3300/auth/login", {
      email: aemail,
      password: apassword,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Fullbody>
      <Registra>
        <h1>Signup</h1>
        <input
          className="signup1"
          type="text"
          placeholder="email"
          onChange={(e) => {
            setuemail(e.target.value);
          }}
        />
        <input
          className="signup2"
          type="password"
          onChange={(e) => {
            setupassword(e.target.value);
          }}
        />
        <Button onClick={register}>
          {" "}
          <input type="submit" name="Signup" value="Signup" />
        </Button>
      </Registra>

      <Box1>
        <input
          className="bb"
          type="text"
          placeholder="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          className="aa"
          type="password"
          placeholder="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <Button onClick={Login}>
          {" "}
          <input className="cc" type="submit" name="login" value="Log In" />
        </Button>
      </Box1>
    </Fullbody>
  );
}

export default App;
