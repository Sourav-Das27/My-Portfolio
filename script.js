const sr = ScrollReveal({
    distance:'65px',
    duration:2000,
    delay: 400,
    reset: false
});
sr.reveal('.description-div', {delay:200, origin:'top' });
sr.reveal('.pic-div', {delay:400, origin:'top' });
sr.reveal('.about-div', {delay:250, origin:'left' });
sr.reveal('.services-div', {delay:250, origin:'left' });
sr.reveal('.projects-div ul li', {delay:200, origin:'top' });
sr.reveal('.my-address', {delay:200, origin:'bottom' });
sr.reveal('.contact-box', {delay:200, origin:'top' });

document.querySelector('.list-icon').addEventListener('click', function(){
    document.querySelector('.nav-bar ul').classList.toggle('open');
    let icon = document.getElementById('icon');
    if(icon.innerHTML === '<i class="ph ph-list"></i>'){
        icon.innerHTML = '<i class="ph ph-x"></i>';
    } else {
        icon.innerHTML = '<i class="ph ph-list"></i>';
    }

});

