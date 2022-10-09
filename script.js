'use strict';

let menu = document.getElementById('bars');
let item = document.getElementById('item');

item.style.right = '-300px';
menu.onclick = function () {
  if (item.style.right == '-300px') {
    item.style.right = '0px';
  } else {
    item.style.right = '-300px';
  }
};
