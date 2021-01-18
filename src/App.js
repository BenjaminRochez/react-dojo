import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from './Navbar.js';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails.js';
// NOTE: if before 17 -> import React from 'react'
function App() {
  //const title = 'Welcome world';
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
