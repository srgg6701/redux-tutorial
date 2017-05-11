window.onload = () => {
    /**
     *  old version:
     *  var createStore = Redux.createStore;
        const store = createStore(counter);
     */

    const contentsBox = document.getElementById('contents');

    const createStore = (reducer) => {
        let state;

        const getState = () => state; // returns state

        const dispatch = (action) => {
            state = reducer(state, action);
            listeners.forEach(listener => listener());
        };

        const subscribe = (listener) => {
            listeners.push(listener);
            return () => {
                listeners = listeners.filter(l => l !== listener);
            }
        };

        dispatch({});

        return { getState, dispatch, subscribe };

    }

    const store = createStore(counter); // returns store.getState, store.dispatch, store.subscribe


    // 
    document.querySelectorAll('#commands a').forEach((link) => {
        link.addEventListener('click', () => {
            // ! this is the window
            console.log('link=>',link);
            var act = link.id.toUpperCase()
            store.dispatch({type: act});
            console.log('act=>', act, 'state=>', store.getState());
        });
    });
    const render = () => contentsBox.innerHTML =  'Current state: ' + store.getState();
    
    store.subscribe(render);
}