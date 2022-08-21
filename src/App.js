import "./App.css";
import AppBarMenu from "./components/appbar";
import BottomBar from "./components/bottombar";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainScreen from "./screens/mainscreen";
import RoomsScreen from "./screens/roomsscreen";
import ContactScreen from "./screens/contactscreen";

export default function App() {
  return (
    <Router>
      <div className="App">
        <AppBarMenu />
        <Routes>
          <Route exact path="/" element={<MainScreen />}></Route>
          <Route exact path="/rooms" element={<RoomsScreen />}></Route>
          <Route exact path="/contact" element={<ContactScreen />}></Route>
        </Routes>
        <BottomBar />
      </div>
    </Router>
  );
}
