document.addEventListener('DOMContentLoaded', function(){

document.querySelectorAll('.nav-link').forEach(link => {
link.addEventListener('click', function(e){

const href = link.getAttribute('href');
if (!href.startsWith('#')) return;
e.preventDefault();
window.location.hash = href.replace('#', '');
});
});


if (!window.location.hash) window.location.hash = '#/';
});
