import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/routes/Home";
import Template from "./components/routes/Template";
import Templates from "./components/routes/Templates";
import CreateTemplate from "./components/routes/CreateTemplate";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* with complex, sometimes we will need to access the history of the objects closest Route match */}
      {/* v5 withRouter, deprecated in v6.  */}
      <h3>{location.state ? location.state.msg : null}</h3>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/create-templates" element={<CreateTemplate />} />
        <Route path="/template/:id" element={<Template />} />
      </Routes>
    </div>
  );
}

export default App;
