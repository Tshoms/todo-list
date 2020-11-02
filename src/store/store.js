import { createStore } from "redux"; // cette methode que je prends en parametre va utiliser le reducer que je souhaite utiliser .
import reducer from "./reducer";
import initialState from "./initialState";

const store = createStore(reducer, initialState);

export default store

// props => <Provider store={store} {...props} />