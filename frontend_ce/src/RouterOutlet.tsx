import * as React from "react";
import { connect } from "react-redux";
import {
  NavLink,
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from "react-router-dom";
import { IRootState } from "./redux/store";

import { Login } from "./components/Login";
import { logOut } from "./redux/auth/actions";

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
      <div style={{ textAlign: "center" }}>
        <h1>React Examples</h1>
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink
            exact={true}
            to="/"
            className="nav-link"
            activeClassName="active"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact={true}
            to="/users"
            className="nav-link"
            activeClassName="active"
          >
            Users
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact={true}
            to="/groups"
            className="nav-link"
            activeClassName="active"
          >
            Groups
          </NavLink>
        </li>
        {isAuthenticated ? (
          <li className="nav-item">
            <a href="#" onClick={logOutAction} className="nav-link">
              Logout
            </a>
          </li>
        ) : null}
      </ul>
      {isAuthenticated ? (
        <div>
          <Switch>
            <Route path="/users" component={User} />
            <Route path="/groups" component={Group} />
            <Route component={Home} />
          </Switch>
        </div>
      ) : (
        <div>
          <Route component={Login} />
        </div>
      )}
    </div>
  );
};

export const RouterOutlet = withRouter(
  connect<Partial<RouterOutletProps>, {}, RouteComponentProps<{}>>(
    (state: RootState) => ({
      isAuthenticated: state.auth.isAuthenticated
    }),
    dispatch => ({
      logOutAction: () => dispatch(logOut())
    })
  )(PureRouterOutlet)
);
