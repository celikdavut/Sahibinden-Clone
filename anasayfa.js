// SİDEBAR

// First Dropup

let dropupText = document.querySelector('.dropupText');
let sidebarDropup = document.querySelector('.sidebarDropup');
let chevron = document.querySelector('.sidebarChevron');

dropupText.addEventListener('click', function (event) {
    event.preventDefault();

    sidebarDropup.style.display = (sidebarDropup.style.display === 'block') ? 'none' : 'block';
    chevron.style.transform = (sidebarDropup.style.display === 'block') ? 'rotate(180deg)' : 'none';
    dropupText.textContent = (sidebarDropup.style.display === 'block') ? 'Kapat' : 'Tümünü Göster';
});

// Second Dropup

let dropupText1 = document.querySelector('.dropupText1');
let sidebarDropup1 = document.querySelector('.sidebarDropup1');
let chevron1 = document.querySelector('.sidebarChevron1');

dropupText1.addEventListener('click', function (event) {
    event.preventDefault();

    sidebarDropup1.style.display = (sidebarDropup1.style.display === 'block') ? 'none' : 'block';
    chevron1.style.transform = (sidebarDropup1.style.display === 'block') ? 'rotate(180deg)' : 'none';
    dropupText1.textContent = (sidebarDropup1.style.display === 'block') ? 'Kapat' : 'Tümünü Göster';
});

// Third Dropup

let dropupText2 = document.querySelector('.dropupText2');
let sidebarDropup2 = document.querySelector('.sidebarDropup2');
let chevron2 = document.querySelector('.sidebarChevron2');

dropupText2.addEventListener('click', function (event) {
    event.preventDefault();

    sidebarDropup2.style.display = (sidebarDropup2.style.display === 'block') ? 'none' : 'block';
    chevron2.style.transform = (sidebarDropup2.style.display === 'block') ? 'rotate(180deg)' : 'none';
    dropupText2.textContent = (sidebarDropup2.style.display === 'block') ? 'Kapat' : 'Tümünü Göster';
});

// Fourth Dropup

let dropupText3 = document.querySelector('.dropupText3');
let sidebarDropup3 = document.querySelector('.sidebarDropup3');
let chevron3 = document.querySelector('.sidebarChevron3');

dropupText3.addEventListener('click', function (event) {
    event.preventDefault();

    sidebarDropup3.style.display = (sidebarDropup3.style.display === 'block') ? 'none' : 'block';
    chevron3.style.transform = (sidebarDropup3.style.display === 'block') ? 'rotate(180deg)' : 'none';
    dropupText3.textContent = (sidebarDropup3.style.display === 'block') ? 'Kapat' : 'Tümünü Göster';
});

// Fifth Dropup

let dropupText4 = document.querySelector('.dropupText4');
let sidebarDropup4 = document.querySelector('.sidebarDropup4');
let chevron4 = document.querySelector('.sidebarChevron4');

dropupText4.addEventListener('click', function (event) {
    event.preventDefault();

    sidebarDropup4.style.display = (sidebarDropup4.style.display === 'block') ? 'none' : 'block';
    chevron4.style.transform = (sidebarDropup4.style.display === 'block') ? 'rotate(180deg)' : 'none';
    dropupText4.textContent = (sidebarDropup4.style.display === 'block') ? 'Kapat' : 'Tümünü Göster';
});

// Sixth Dropup

let dropupText5 = document.querySelector('.dropupText5');
let sidebarDropup5 = document.querySelector('.sidebarDropup5');
let chevron5 = document.querySelector('.sidebarChevron5');

dropupText5.addEventListener('click', function (event) {
    event.preventDefault();

    sidebarDropup5.style.display = (sidebarDropup5.style.display === 'block') ? 'none' : 'block';
    chevron5.style.transform = (sidebarDropup5.style.display === 'block') ? 'rotate(180deg)' : 'none';
    dropupText5.textContent = (sidebarDropup5.style.display === 'block') ? 'Kapat' : 'Tümünü Göster';
});


// FOOTER
var dropdownButtons = document.querySelectorAll('.dropdownButton');

dropdownButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var dropdownMenu = this.nextElementSibling;
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';

        var chevron2 = this.querySelector('.footerChevron');

        chevron2.style.transform = (dropdownMenu.style.display === 'block') ? 'rotate(180deg)' : 'none';
    });
});