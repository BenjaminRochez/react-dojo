import Navbar from './Navbar.js';
import Home from './Home';
// NOTE: if before 17 -> import React from 'react'
function App() {
  //const title = 'Welcome world';
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
