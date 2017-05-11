window.onload = () => {
    const contentsBox = document.getElementById('contents');
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