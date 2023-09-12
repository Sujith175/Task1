import { Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Navigation from "./component/Navigation/Navigation";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

