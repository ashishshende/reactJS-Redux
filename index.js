// Three Core Concepts of Redux
// 1. Store - Holds the state of your application - Single store Object
// 2. Action - Describes What Happened
// 3. Reducer - Ties the store and action together

//Redux import for creating store
const redux = require('redux');

//create Store function reference
//const createStore = reducer => redux.createStore(reducer);
const createStore = redux.createStore;

//Action Constant
const BUY_CAKE = 'BUY_CAKE';

//Action Object
const buyCakeObj = {
    type: BUY_CAKE,
    info: 'First Redux Action'
}

//Action Creater
const buyCake = () => {
    return buyCakeObj;
};

//Initial State Object
const initialState = {
    numOfCakes: 10
}

//Reducer - pure function returns new state
// (prevState, action)=> newState;

const reducerFun = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes -1
            };
            break;
        default:
            return state;
            break;
    }
};

const store = createStore(reducerFun);

console.log('Initial State:', store.getState());

const unSubscribe = store.subscribe(() => console.log('Updated State:', store.getState()));


store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
    
unSubscribe()