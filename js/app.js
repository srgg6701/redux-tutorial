const counter = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

var createStore = Redux.createStore;
const store = createStore(counter);
// const { createStore } = Redux;
// import { createStore } from 'redux';

store.dispatch({type:'INCREMENT'});