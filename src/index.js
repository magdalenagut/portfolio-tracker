import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App';
import "../src/assets/scss/portfolio-tracker.scss";

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//     <BrowserRouter>
//       <Switch>
//         <Route path="/app" render={(props) => <App {...props} />} />
//         <Route path="/auth" render={(props) => <Auth   {...props} />} />
//         <Redirect from="/" to="/admin/index" />
//       </Switch>
//     </BrowserRouter>,
//     document.getElementById("root")
//   );
  