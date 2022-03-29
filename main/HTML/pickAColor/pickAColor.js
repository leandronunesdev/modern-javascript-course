const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet',
];
// h1.addEventListener('mouseover', function () {
//   console.log(this.innerText);
// });

const h1 = document.querySelector('h1');
const changeColor = function (evt) {
  console.log(evt);
  h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector('#boxes');

for (let color of colors) {
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  box.classList.add('box');
  container.appendChild(box);
  box.addEventListener('click', changeColor);
}

document.body.addEventListener('keypress', function (e) {
  console.log(e);
});