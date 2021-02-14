import React, { Component } from "react";
import "../assets/scss/portfolio-tracker.scss";
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import {Dashboard} from "../views/Dashboard";
import {Portfolio} from "../views/Dashboard";
import {Transactions} from "../views/Dashboard";
import {NewTransaction} from "../views/Dashboard";
import {Calculator} from "../views/Dashboard";
import {Watchlist} from "../views/Dashboard";
import {News} from "../views/Dashboard";
import {Settings} from "../views/Dashboard";

class App extends Component {
   render() {
      return (
         <Router>  
            <div className="App">
               <nav><Navbar /></nav>
               <sidebar><Sidebar /></sidebar>
               <section className="view">
                  <Switch>
                     <Route path="/" exact component={Dashboard}/>
                     <Route path="/porfolio" exact component={Portfolio}/>
                     <Route path="/transactions" exact component={Transactions}/>
                     <Route path="/new_transaction" exact component={NewTransaction}/>
                     <Route path="/calculator" exact component={Calculator}/>
                     <Route path="/wachlist" exact component={Watchlist}/>
                     <Route path="/news" exact component={News}/>
                     <Route path="/settings" exact component={Settings}/>
                     <Route component={ErrorPage}/>
                  </Switch>
               </section>
               <footer><Footer /></footer>
            </div>
         </Router>
      );
   }
};
export default App;
