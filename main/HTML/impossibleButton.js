const btn = document.querySelector('button');

btn.addEventListener('mouseover', function () {
  console.log('test');
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;
});

btn.addEventListener('click', function () {
  btn.innerText = 'You got me';
  document.body.style.backgroundColor = 'rgba(0, 255, 0)';
});
