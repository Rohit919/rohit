import React from 'react';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
function App() {
  return (
    <Router>
      <div className="app">
        <div className="container app__container">
          <div className="row app__row">
            <div className="col-lg-3">

              <Sidebar />

            </div>
            <div className="col-lg-9 app__main-content">
              {/* navbar */}
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/projects" component={Projects} />
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;