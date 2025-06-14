import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./component/Navbar";
// import Home from "./pages/Home";
import { Home } from "./index";

// download @react-spring/three to take control of animation
// download  npm i @react-three/drei   ready-made 3D components and helpers to make building scenes with react-three-fiber faster and easier.
// download npm i @react-three/fiber a React renderer for Three.js
function App() {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
