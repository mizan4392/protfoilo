import "./App.css";
import Intro from "./components/intro/Intro.component";
import NavBar from "./components/navBar/NavBar.component";

function App() {
  return (
    <div className="flex gap-6 flex-col py-3 container">
      <NavBar />
      <Intro />
    </div>
  );
}

export default App;
