import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Films from "./components/Films/Films";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comedy from "./components/Films/Films_components/Comedy";
import Films_footer from "./components/Films/Films_components/Films_footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="Films/*" element={<Films />}></Route>
        <Route path="Comedy/*" element={<Comedy />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
