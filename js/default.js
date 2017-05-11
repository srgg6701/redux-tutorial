window.onload = function(){
    console.log('Redux, createStore, store=>', {Redux:Redux, createStore:createStore, store:store});
    document.querySelectorAll('#commands a').forEach(function(link){
        link.addEventListener('click', function(){
            var act = this.id.toUpperCase()
            store.dispatch({type: act});
            console.log('act=>', act);
        });
    });
}