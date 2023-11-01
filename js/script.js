// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            })
        }
        
    });
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
} 

/*function sendMessage(){
    (function(){
        emailjs.init("isNOpmVBtyO045QHN"); //account public key
    })();
    var serviceID = "service_ij534dv" ;//email service id
    var templateID = "template_5di3azg" ;//email template ID

    var params = {
        sendername: document.querySelector("#name").value,
        sendername: document.querySelector("#email").value,
        sendername: document.querySelector("#number").value,
        sendername: document.querySelector("#message").value
    };

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        alert('Thankyou, '+params['sendername'] + '! Your message has been sent.');
    })
    .catch();
} */
