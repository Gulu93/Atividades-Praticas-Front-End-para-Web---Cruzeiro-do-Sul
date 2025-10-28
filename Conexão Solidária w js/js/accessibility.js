(function(){
function focusMain(){
var main = document.getElementById('conteudo');
if (main) {
main.setAttribute('tabindex', '-1');
main.focus({preventScroll:true});
}
}


window.addEventListener('hashchange', function(){
focusMain();
});
window.addEventListener('load', function(){
focusMain();
});


(function(){
var sequence = [];
var timeout;
window.addEventListener('keydown', function(e){
clearTimeout(timeout);
sequence.push(e.key.toLowerCase());
timeout = setTimeout(()=>sequence=[],1000);
if (sequence.join('') === 'gh') window.location.hash = '#/';
if (sequence.join('') === 'gp') window.location.hash = '#/projetos';
if (sequence.join('') === 'gc') window.location.hash = '#/cadastro';
});
})();


})();