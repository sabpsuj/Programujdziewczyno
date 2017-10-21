'use strict';
document.addEventListener('DOMContentLoaded', function () {
    var forDropdown = document.querySelector('.for-dropdown');
    var dropDownMenu = document.querySelector('.dropdown');

    console.log(forDropdown, dropDownMenu);
    console.log(dropDownMenu.style);
    forDropdown.addEventListener('mouseover', function () {
        dropDownMenu.style.display = 'block';
    });
    forDropdown.addEventListener('mouseout', function () {
        dropDownMenu.style.display = 'none';
    });
});
