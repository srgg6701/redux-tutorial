const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const createStore = (reducer) => {
    
    let state, listeners = [];

    const   getState = () => state,
            
            dispatch = (action) => {
                state = reducer(state, action);
                listeners.forEach(listener => listener());
            },
            
            subscribe = (listener) => {
                listeners.push(listener);
                return () => {
                    listeners = listeners.filter(l => l !== listener);
                }
            };

    dispatch({});

    return { getState, dispatch, subscribe };
};