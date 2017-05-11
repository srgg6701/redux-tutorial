window.onload = () => {
    
    const   contentsBox = document.getElementById('contents'),
            store = createStore(counter), // returns store.getState, store.dispatch, store.subscribe
            render = () => contentsBox.innerHTML =  'Current state: ' + store.getState();

    // 
    document.querySelectorAll('#commands a').forEach((link) => {
        link.addEventListener('click', () => {
            // ! this is the window
            var act = link.id.toUpperCase()
            store.dispatch({type: act});
            console.log('act=>', act, 'state=>', store.getState());
        });
    });
    
    store.subscribe(render);
}