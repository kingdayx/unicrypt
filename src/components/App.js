import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Browser from "./Browser";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/browser" component={Browser} />
      </Switch>
    </div>
  );
}

export default App;
