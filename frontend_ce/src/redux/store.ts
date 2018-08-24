import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  StoreEnhancer
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import { authReducer as AuthReducer, IAuthState } from "./auth/reducer";

// export interface IRootState {
//   auth: IAuthState;
// }

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (
      enhancer: StoreEnhancer
    ) => StoreEnhancer;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    // auth: AuthReducer
  }),
  composeEnhancers(applyMiddleware(logger, thunk))
);
