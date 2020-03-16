import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(rootReducers, composeWithDevTools( //Cuando esta en produccion el composeWithDevTools se quita...
    applyMiddleware(thunk) //Aqui estan los middlewares...
));

export default store;