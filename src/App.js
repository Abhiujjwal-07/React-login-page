import { Fullbody, Box1, Box2, Button } from "./component/style/apps";

function App() {
  return (
    <Fullbody>
      <Box1>
        <input
          className="bb"
          type="text"
          placeholder="Mobile number or email"
        />
      </Box1>
      <Box2>
        <input className="aa" type="password" placeholder="New password" />
      </Box2>
      <Button>
        <input className="cc" type="submit" name="login" value="Log In" />
      </Button>
    </Fullbody>
  );
}

export default App;
