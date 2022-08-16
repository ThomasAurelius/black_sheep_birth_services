
const q1 = document.querySelector('.q1');
const q2 = document.querySelector('.q2');
const q3 = document.querySelector('.q3');
const q4 = document.querySelector('.q4');
const q5 = document.querySelector('.q5');
const q6 = document.querySelector('.q6');

const faq1 = document.querySelector('.faq1');
const faq2 = document.querySelector('.faq2');
const faq3 = document.querySelector('.faq3');
const faq4 = document.querySelector('.faq4');
const faq5 = document.querySelector('.faq5');
const faq6 = document.querySelector('.faq6');

const question = document.querySelectorAll('.q');
const faq = document.querySelectorAll('.faq');



q1.addEventListener('click', () => {
   faq.forEach(faq => faq.classList.add('hidden'))
  faq1.classList.remove('hidden')
});

q2.addEventListener('click', () => {
   faq.forEach(faq => faq.classList.add('hidden'))
   faq2.classList.remove('hidden')
});

q3.addEventListener('click', () => {
   faq.forEach(faq => faq.classList.add('hidden'))
   faq3.classList.remove('hidden');
});

q4.addEventListener('click', () => {
   faq.forEach(faq => faq.classList.add('hidden'))
   faq4.classList.remove('hidden');
});

q5.addEventListener('click', () => {
   faq.forEach(faq => faq.classList.add('hidden'))
   faq5.classList.remove('hidden');
});

q6.addEventListener('click', () => {
   faq.forEach(faq => faq.classList.add('hidden'))
   faq6.classList.remove('hidden');
});


