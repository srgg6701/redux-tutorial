window.onload = () => {
    var contentsBox = document.getElementById('contents');
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
    store.subscribe(() => {
        contentsBox.innerHTML =  'Current state: ' + store.getState();
    });
}