import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;