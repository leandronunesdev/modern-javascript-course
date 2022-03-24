const btn = document.querySelector('button');

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

async function animateRight(el, amt) {
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
}

animateRight(btn, 100).catch((err) => {
  console.log('done', err);
  animateRight(btn, -100);
});

// moveX(btn, 100, 1000)
//   .then(() => moveX(btn, 100, 1000))
//   .then(() => moveX(btn, 100, 1000))
//   .then(() => moveX(btn, 100, 1000))
//   .then(() => moveX(btn, 100, 1000))
//   .then(() => moveX(btn, 100, 1000))
//   .then(() => console.log('done'))
//   .catch(({ bodyBoundary, amount, elRight }) => {
//     console.log(`Body is ${bodyBoundary}px wide`),
//       console.log(`Element is at ${elRight}px, ${amount}px is too large`);
//   });

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//   }, 2000);
// }, 1000);

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//   setTimeout(() => {
//     const bodyBoundary = document.body.clientWidth;
//     const elRight = element.getBoundingClientRect().right;
//     const currLeft = element.getBoundingClientRect().left;
//     if (elRight + amount > bodyBoundary) {
//       onFailure();
//     } else {
//       element.style.transform = `translateX(${currLeft + amount}px)`;
//       onSuccess();
//     }
//   }, delay);
// };

// moveX(btn, 100, 2000, () => {
//   moveX(btn, 200, 1000, () => {
//     moveX(btn, 300, 1000, () => {
//       moveX(btn, 400, 1000, () => {
//         moveX(btn, 600, 1000);
//       });
//     });
//   });
// });

// moveX(
//   btn,
//   100,
//   1000,
//   () => {
//     //success
//     moveX(
//       btn,
//       400,
//       1000,
//       () => {
//         moveX(
//           btn,
//           700,
//           1000,
//           () => {
//             console.log('really, we still have screen left?');
//           },
//           () => {
//             //fail
//             alert('CANNOT MOVE FURTHER');
//           }
//         );
//       },
//       () => {
//         //fail
//         alert('CANNOT MOVE FURTHER');
//       }
//     );
//   },
//   () => {
//     //fail
//     alert('CANNOT MOVE FURTHER');
//   }
// );
