'use strict';
document.addEventListener('DOMContentLoaded', function () {
    var forDropdown = document.querySelector('.for-dropdown');
    var dropDownMenu = document.querySelector('.dropdown');
    forDropdown.addEventListener('mouseover', function () {
        dropDownMenu.style.display = 'block';
    });
    forDropdown.addEventListener('mouseout', function () {
        dropDownMenu.style.display = 'none';
    });
    var buttons = document.querySelectorAll('.read-more');

    function showHide() {
        var textArea = this.previousElementSibling;
        if (textArea.style.display === 'none' || textArea.style.display === '') {
            this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
            textArea.style.display = 'block';
        } else {
            this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
            textArea.style.display = 'none';
        }
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
    }
    var borderBottom = document.querySelector('.navbar-fixed-top');
    window.addEventListener('scroll', function () {
        borderBottom.style.borderBottom = '0.1px solid #7f7f7f';
    });

    var buttonBottom = document.querySelector('.btn-dark');
    buttonBottom.addEventListener('click', function () {
        window.scroll(0, 0);
    });



    var items = document.querySelectorAll('.org');
    var dots = document.querySelectorAll('.dot');
    console.log(items);
    console.log(dots);


// // for(var i=0; i < items.length; i++){
// //     items[i].classList.remove("visible");
// //     }

// for(var i=0; i < dots.length; i++){
//     dots[i].addEventListener('click', function(){
//         dots[i].classList.remove("active");
//         this.classList.add("active");
//         // items[i].classList.remove("visible");
//         console.log(this);
//     })
//     // console.log(this);
//     // console.log(items.classList);
// };
// // console.log(dots);
// // console.log(items);

    dots[0].addEventListener('click', function(){
        for(var i = 0; i < dots.length; i++){
            dots[i].classList.remove("active");
            items[i].classList.remove("visible");
        }
        this.classList.add("active");
        items[0].classList.add("visible");
    });
    dots[1].addEventListener('click', function(){
        for(var i = 0; i < dots.length; i++){
            dots[i].classList.remove("active");
            items[i].classList.remove("visible");
        }
        this.classList.add("active");
        items[1].classList.add("visible");
    });
    dots[2].addEventListener('click', function(){
        for(var i = 0; i < dots.length; i++){
            dots[i].classList.remove("active");
            items[i].classList.remove("visible");
        }
        this.classList.add("active");
        items[2].classList.add("visible");
    });
});
