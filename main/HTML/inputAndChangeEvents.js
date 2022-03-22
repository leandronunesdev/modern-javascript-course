const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

// form.addEventListener('submit', function (e) {
//   alert('submitted the form!');
//   console.log('cc', creditCardInput.value);
//   console.log('terms', termsCheckbox.value);
//   console.log('veggies', veggieSelect.value);

//   e.preventDefault();
// });

const formData = {};
for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
  input.addEventListener('change', ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === 'checkbox' ? checked : value;
    console.log(formData);
  });
}

// creditCardInput.addEventListener('input', (e) => {
//   console.log('CC CHANGED!', e);
//   formData['cc'] = e.target.value;
// });

// veggieSelect.addEventListener('input', (e) => {
//   console.log('VEGGIE CHANGED!', e);
//   formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
//   console.log('CHECKBOX', e);
//   formData['agreeToTerms'] = e.target.value;
// });
