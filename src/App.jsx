import LogIn from "./components/LogIn";
import { Route, Switch } from "react-router-dom";

import LogIn from "./components/LogIn";
function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
