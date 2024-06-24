import "./App.css";
import NavigationBar from "./components/NavigationsBar";
import Intro from "./components/Intro";
import Nowplaying from "./components/Nowplaying";
import Popular from "./components/Popular";
import Toprated from "./components/Toprated";

import "./style/LandingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="nowplaying">
        <Nowplaying />
      </div>

      <div className="popular">
        <Popular />
      </div>

      <div className="toprated">
        <Toprated />
      </div>
    </div>
  )
}

export default App;