import * as React from "react";
import { connect } from "react-redux";
import {
  // NavLink,
  // Route,
  RouteComponentProps,
  // Switch,
  withRouter
} from "react-router-dom";

import AboutUs from "./components/Aboutus";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Howitwork from "./components/Howitwork";
// import { Login } from "./components/Login";
import Nav from "./components/Nav";
import { logOut } from "./redux/auth/actions";
import { IRootState } from "./redux/store";

interface IRouterOutletProps extends RouteComponentProps<{}> {
  isAuthenticated: boolean;
  logOutAction: () => void;
}

const PureRouterOutlet = ({
  isAuthenticated,
  logOutAction
}: IRouterOutletProps) => {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1 className="App-title">Welcome to CodeEasy</h1>
        <h2 className="App-subtitle">Snap and get live 1-on-1 coding help</h2>
        <button className="App-intro">Get start now!</button>
      </header>
      <Howitwork />
      <AboutUs />
      <Community />
      <Footer />
    </div>

    // <div className="App">
    //   <div style={{ textAlign: "center" }}>
    //     <h1>React Examples</h1>
    //   </div>
    //   <ul className="nav nav-tabs">
    //     <li className="nav-item">
    //       <NavLink
    //         exact={true}
    //         to="/"
    //         className="nav-link"
    //         activeClassName="active"
    //       >
    //         Home
    //       </NavLink>
    //     </li>
    //     <li className="nav-item">
    //       <NavLink
    //         exact={true}
    //         to="/users"
    //         className="nav-link"
    //         activeClassName="active"
    //       >
    //         Users
    //       </NavLink>
    //     </li>
    //     <li className="nav-item">
    //       <NavLink
    //         exact={true}
    //         to="/groups"
    //         className="nav-link"
    //         activeClassName="active"
    //       >
    //         Groups
    //       </NavLink>
    //     </li>
    //     {isAuthenticated ? (
    //       <li className="nav-item">
    //         <a href="#" onClick={logOutAction} className="nav-link">
    //           Logout
    //         </a>
    //       </li>
    //     ) : null}
    //   </ul>
    //   {isAuthenticated ? (
    //     <div>
    //       <Switch>
    //         <Route path="/users" component={User} />
    //         <Route path="/groups" component={Group} />
    //         <Route component={Home} />
    //       </Switch>
    //     </div>
    //   ) : (
    //     <div>
    //       <Route component={Login} />
    //     </div>
    //   )}
    // </div>
  );
};

export const RouterOutlet = withRouter(
  connect<Partial<IRouterOutletProps>, {}, RouteComponentProps<{}>>(
    (state: IRootState) => ({
      isAuthenticated: state.auth.isAuthenticated
    }),
    dispatch => ({
      logOutAction: () => dispatch(logOut())
    })
  )(PureRouterOutlet)
);
