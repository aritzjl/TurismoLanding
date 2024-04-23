const bugerMenu = document.getElementById('burger');
const nav = document.getElementById('nav');


bugerMenu.addEventListener('click', () => {
    
    if(nav.classList.contains('hidden')){
        nav.classList.remove('hidden');
    }else{
        nav.classList.add('hidden');
    }
});