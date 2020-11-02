import initialState from "./initialState";

const ADD_TODO_ACTION = "ADD_TODO_ACTION"
// pour retourner un état en fonction de l'action qui a était défini .
const reducer = (state = initialState, action) => { 

   switch (action.type) {
       case ADD_TODO_ACTION:
           return [...state,{completed:false, ...action.payload}]
       default:
           return state
           
   }
};

export default reducer