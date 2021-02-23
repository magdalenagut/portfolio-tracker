import React, { Component } from "react";
import "../assets/scss/portfolio-tracker.scss";
import { BrowserRouter as Router} from 'react-router-dom';
import Page from "../layouts/Page";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";

class App extends Component {
 render () {
   return (
         <Router>  
            <div className="app">
               <aside><Sidebar/></aside>
               <main> 
                     <nav><Navbar/></nav>
                     <section className="page">
                     <Page />
                     </section>
                     <footer><Footer/></footer>
               </main>
            </div>
         </Router>
      );
   }
};

export default App;
