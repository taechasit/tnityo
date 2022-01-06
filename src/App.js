import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import One from "./one";
import Two from "./two";

function App() {
  return (
    <Router>
        <nav>
          <NavUl>
            <li>
              <Link to="/">Question 1</Link>
            </li>
            <li>
              <Link to="/two">Question 2</Link>
            </li>
          </NavUl>
        </nav>

        <Routes>
          <Route path="/" element={<One />} />
          <Route path="/two" element={<Two />} />
        </Routes>
    </Router>
  );
}

export default App;

const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  li {
    margin: 0 16px;
    a {
      text-decoration: none;
    }
  }
`;
