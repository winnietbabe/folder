import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import Library from "./pages/Library";
import Explore from "./pages/Explore";
import Videos from "./pages/Videos";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";






function App() {
  return (
    <BrowserRouter>
      <div className="App flex ">
        <div>
          <SideBar />
         
        </div>
        
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/library" element={<Library />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Videos" element={<Videos />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Settings" element={<Settings />} />


          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
