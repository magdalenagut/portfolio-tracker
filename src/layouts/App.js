import React, { Component } from "react";
import "../assets/scss/portfolio-tracker.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "../layouts/Page";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <aside></aside>
          <Sidebar />
          <main>
            <nav>
              <Navbar />
            </nav>
            <section>
              <Page />
            </section>
            <footer>
              <Footer />
            </footer>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
