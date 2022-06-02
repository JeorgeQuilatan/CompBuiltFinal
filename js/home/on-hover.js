const img_one = document.getElementById('img-one');
const img_two = document.getElementById('img-two');
const img_three = document.getElementById('img-three');
const img_four = document.getElementById('img-four');
const img_five = document.getElementById('img-five');
const text_one = document.getElementById('text-one');
const text_two = document.getElementById('text-two');
const text_three = document.getElementById('text-three');
const text_four = document.getElementById('text-four');
const text_five = document.getElementById('text-five');
const textbox_one = document.getElementById('textbox-one');
const textbox_two = document.getElementById('textbox-two');
const textbox_three = document.getElementById('textbox-three');
const textbox_four = document.getElementById('textbox-four');
const textbox_five = document.getElementById('textbox-five');

img_one.addEventListener('mouseover', () => {
    text_one.style.visibility = 'visible';
    textbox_one.style.visibility = 'visible';

}, false);

img_one.addEventListener('mouseleave', () => {
    text_one.style.visibility = 'hidden';
    textbox_one.style.visibility = 'hidden';
}, false);

img_two.addEventListener('mouseover', () => {
    text_two.style.visibility = 'visible';
    textbox_two.style.visibility = 'visible';
}, false);

img_two.addEventListener('mouseleave', () => {
    text_two.style.visibility = 'hidden';
    textbox_two.style.visibility = 'hidden';
}, false);

img_three.addEventListener('mouseover', () => {
    text_three.style.visibility = 'visible';
    textbox_three.style.visibility = 'visible';
}, false);

img_three.addEventListener('mouseleave', () => {
    text_three.style.visibility = 'hidden';
    textbox_three.style.visibility = 'hidden';
}, false);

img_four.addEventListener('mouseover', () => {
    text_four.style.visibility = 'visible';
    textbox_four.style.visibility = 'visible';
}, false);

img_four.addEventListener('mouseleave', () => {
    text_four.style.visibility = 'hidden';
    textbox_four.style.visibility = 'hidden';
}, false);

img_five.addEventListener('mouseover', () => {
    text_five.style.visibility = 'visible';
    textbox_five.style.visibility = 'visible';
}, false);

img_five.addEventListener('mouseleave', () => {
    text_five.style.visibility = 'hidden';
    textbox_five.style.visibility = 'hidden';
}, false);

