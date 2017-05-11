window.onload = function(){
    // 
    document.querySelectorAll('#commands a').forEach(function(link){
        link.addEventListener('click', function(){
            var act = this.id.toUpperCase()
            store.dispatch({type: act});
            console.log('act=>', act, 'state=>', store.getState());
        });
    });
}