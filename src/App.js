import { Fullbody, Box1, Box2, Button, Registra } from "./component/style/apps";
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
        <label>email</label>
        <input
          type="text"
          onChange={(e) => {
            setuemail(e.target.value);
          }}
        />
        <label>password</label>
        <input
          type="text"
          onChange={(e) => {
            setupassword(e.target.value);
          }}
        />
        <button onClick={register}>Register</button>
      </Registra>
      <Box1>
        <input
          className="bb"
          type="text"
          placeholder="email"
          onchange={(e) => {
            setemail(e.target.value);
          }}
        />
      </Box1>
      <Box2>
        <input
          className="aa"
          type="password"
          placeholder="password"
          onchange={(e) => {
            setpassword(e.target.value);
          }}
        />
      </Box2>
      <Button onClick={Login}>
        <input className="cc" type="submit" name="login" value="Log In" />
      </Button>
    </Fullbody>
  );
}

export default App;
