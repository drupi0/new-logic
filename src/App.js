import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Main, TopBar } from "./components";

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Main></Main>
    </div>
  );
}

export default App;
