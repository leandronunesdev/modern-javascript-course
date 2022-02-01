function grumpus() {
  alert('gahh go away');
}

// setTimeout(grumpus, 5000);

// setTimeout(function () {
//   alert('welcome');
// }, 5000);

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  alert('why did you click me??');
});
