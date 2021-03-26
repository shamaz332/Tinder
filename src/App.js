import "./App.css";
import { Header } from "./Components/Header/Header";
import MatchCard from "./Components/Cards/MatchCard"
import { Switch, Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
<MatchCard/>
{/* <Router>


  
</Router> */}

    </div>
  );
}

export default App;
