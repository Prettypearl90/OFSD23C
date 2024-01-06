import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}
function Contact() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Contact View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}
function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
          Home
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
          About
          </Link>
          <Link to="/contact" style={{ padding: 5 }}>
          Contact
          </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;