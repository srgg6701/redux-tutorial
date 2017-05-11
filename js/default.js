window.onload = () => {
    const   contentsBox = document.getElementById('contents'),
            store = createStore(counter);
    // 
    document.querySelectorAll('#commands a').forEach((link) => {
        link.addEventListener('click', () => {
            // ! this is the window
            console.log('link=>',link);
            let act = link.id.toUpperCase()
            store.dispatch({type: act});
            console.log('act=>', act, 'state=>', store.getState());
        });
    });
    store.subscribe(() => {
        contentsBox.innerHTML =  'Current state: ' + store.getState();
    });
}