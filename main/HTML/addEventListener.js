// the thing -> event type  -> the code to run
// button    -> click       -> change the color
// input     -> hits return -> get search results
// image     -> mouseover   -> display the img caption

// const btn = document.querySelector('#clicker');

// btn.onclick = function () {
//   console.log('go away');
// };

// btn.ondblclick = function () {
//   console.log('double');
// };

const btn = document.querySelector('button');

// btn.onclick = function () {
//   console.log('You clicked me');
// };

// btn.onclick = function () {
//   console.log('Second time');
// };

btn.addEventListener('click', function () {
  alert('clicked');
});

btn.addEventListener('click', function () {
  console.log('second thing');
});

btn.addEventListener('mouseover', function () {
  btn.innerText = 'stop touching me!';
});

btn.addEventListener('mouseout', function () {
  btn.innerText = 'click me';
});

window.addEventListener('scroll', function () {
  console.log('stop scrolling');
});
