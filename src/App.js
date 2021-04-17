import "./App.css";
import { Header } from "./Components/Header/Header";
import MatchCard from "./Components/Cards/MatchCard";
import { Switch, Route } from "react-router-dom";
import SwipeButton from "./Components/SwipeButton/SwipeButton";
import ChatView from "./Components/Chat/ChatBox";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/chat">
          <Header backBtn="/" />
          <ChatView />
        </Route>

        <Route path="/">
          <Header />
          <MatchCard />
          <SwipeButton />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
