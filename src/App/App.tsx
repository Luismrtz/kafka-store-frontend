// import React from 'react';
// import Home from '../views/Home';
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
  Redirect,
} from "react-router-dom";
import './App.css';
import { routes } from "../config/router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function App() {
  return (
    <div className="app">
          <BrowserRouter>
          <Navbar/>
          <Switch>
            {/* //todo for specific redirections? wip */}
            {/* <Redirect exact from="/details" to="/" /> */}
            {/* <Redirect exact from="/info" to="/" /> */}
            {/* //todo order id page specific? */}
            <Redirect exact from="/order" to="/" />

            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component
                      name={route.name}
                      {...props}
                      {...route.props}
                    />
                  )}
                />
              );
            })}
          </Switch>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
