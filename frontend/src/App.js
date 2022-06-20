import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <a href="/" target="_blank">
            amazona
          </a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<Products />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
