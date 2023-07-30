//modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages and componets
import Home from "./pages/Home";

//css
import "./styles/App.css";
import "./styles/navbar.css";
import "./styles/banner.css";
import "./styles/propertyForm.css";
import "./styles/services.css";
import "./styles/properties.css";
import "./styles/workflow.css";
import "./styles/testimonials.css";
import "./styles/agents.css";
import "./styles/blogs.css";
import "./styles/Contact.css";
import "./styles/footer.css";
import "./styles/propertyPage.css";
import "./styles/mediaquery.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
