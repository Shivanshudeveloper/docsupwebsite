import './App.css';
import { HashRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <HashRouter>
        <HomePage />
      </HashRouter>
    </>
  );
}

export default App;
