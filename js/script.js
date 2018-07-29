let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0],
    nameInput = document.getElementsByClassName("contactform_name")[0],
    phoneInput = document.querySelector('.contactform_phone'),
    mailInput = document.querySelectorAll('.contactform_mail')[0],
    modal = document.querySelector('.modal'),
    close = document.querySelector(".close");

function hover() {
    heading.textContent = "Действительно все!"
};

function out() {
    heading.textContent = "Всю включено!"
}

heading.addEventListener("click", hover);
heading.addEventListener("dbclick", function() {
    heading.textContent = "Все включено!"
});

receiveBtn.addEventListener('click', function() {
    modal.style.display = "block"
});

close.addEventListener('click', function() {
    modal.style.display = "none"
})