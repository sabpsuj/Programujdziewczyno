/*global:document, console*/
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
    /*console.log(buttons[0].previousElementSibling);
    buttons[0].addEventListener('click', */
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
        borderBottom.style.borderBottom = '1px solid #7f7f7f';
    });
});
