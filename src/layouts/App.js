import React from "react";
import "../assets/scss/portfolio-tracker.scss";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from "../pages/Dashboard";
import Portfolio from "../pages/Dashboard";
import Transactions from "../pages/Dashboard";
import NewTransaction from "../pages/Dashboard";
import Calculator from "../pages/Dashboard";
import Watchlist from "../pages/Dashboard";
import News from "../pages/Dashboard";
import Settings from "../pages/Dashboard";

import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";

const App = () => {
 
   return (
         <Router>  
            <div className="App">
               <nav className="navbar"><Navbar/></nav>
               <aside className="sidebar"><Sidebar/></aside>
               <main className="page">
                  <Switch>
                     <Route path="/" exact component={Dashboard}/>
                     <Route path="/porfolio" component={Portfolio}/>
                     <Route path="/transactions" component={Transactions}/>
                     <Route path="/new_transaction" component={NewTransaction}/>
                     <Route path="/calculator" component={Calculator}/>
                     <Route path="/wachlist" component={Watchlist}/>
                     <Route path="/news" component={News}/>
                     <Route path="/settings" component={Settings}/>
                     {/* <Route component={ErrorPage}/>  */}
                  </Switch>
               </main>
               <footer><Footer/></footer>
            </div>
         </Router>
      );
};

export default App;
