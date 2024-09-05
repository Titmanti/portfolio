const sidenav = document.getElementById('sidebar');
const btns = document.querySelectorAll('#sidebar-btn');
const background = document.getElementById('black-background');

btns.forEach(btn => {
    btn.onclick = function() {
        sidenav.classList.toggle('active');
        background.classList.toggle('active');
    }
});
