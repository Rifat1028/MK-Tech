import "./App.css";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Downbar from "./components/Downbar/Downbar";
import Intro from "./components/Intro/Intro";
import Counter from "./components/Counter/Counter";
function App() {
  return (
    <div className="App">
      <Home />
      <Intro />
      <Services />
      <Counter />
      <Downbar />
    </div>
  );
}

export default App;
