import React from "react";
import {Switch, Route } from 'react-router-dom';

import Dashboard from "../pages/Dashboard";
import Portfolio from "../pages/Portfolio";
import Transactions from "../pages/Transactions";
import NewTransaction from "../pages/NewTransaction";
import Calculator from "../pages/Calculator";
import Watchlist from "../pages/Watchlist";
import News from "../pages/News";
import Settings from "../pages/Settings";
import Help from "../pages/Help";
import Faq from "../pages/Faq";


const Page = () => {
 
    return (
        <div className="content">
            <Switch>
                <Route path="/" exact={true} component={Dashboard}/>
                <Route path="/porfolio" component={Portfolio}/>
                <Route path="/transactions" component={Transactions}/>
                <Route path="/new_transaction" component={NewTransaction} />
                <Route path="/calculator" component={Calculator}/>
                <Route path="/wachlist" component={Watchlist}/>
                <Route path="/news" component={News}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/help" component={Help}/>
                <Route path="/faq" component={Faq}/>
                {/* <Route component={ErrorPage}/>  */}
            </Switch>
        </div>
       );
 };
 
 export default Page;




