import "./App.css";
import { Header } from "./Components/Header/Header";
import MatchCard from "./Components/Cards/MatchCard";
import { Switch, Route } from "react-router-dom";
import SwipeButton from "./Components/SwipeButton/SwipeButton";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <MatchCard />
          <SwipeButton/>
        </Route>
        <Route path="/caht">Im chat</Route>
      </Switch>
    </div>
  );
}

export default App;
