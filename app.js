const forms = document.querySelectorAll('form');
let numberOfQuestions = 0;
let score = 0;

// Select the elements to translate
const language = document.querySelector('#language');
let pageTitle = document.querySelector('title')
let pageLanguage = document.querySelector('html')
let title = document.querySelector('h1');
let question1 = document.querySelector('#question1 h2');
let question2 = document.querySelector('#question2 h2');
let question3 = document.querySelector('#question3 h2');
let yes = document.querySelectorAll('[for="a1"], [for="a3"], [for="a5"]');
let next = document.querySelectorAll('[type="submit"]');
let resultTitle = document.querySelector('#result h2');
let resultParagraph = document.querySelector('#result p');

// Chech the answers
forms.forEach((form, i) => form.addEventListener('submit', e => {

  e.preventDefault();

  // Count the questions
  numberOfQuestions++

  // Add points for every yes 
  let name = 'q' + (i + 1)
  if (e.target[name].value == 1) score += 1;

  // Hide the element show the next one
  e.target.classList.toggle('hide');
  e.target.nextElementSibling.classList.toggle('hide');

  // Show the results
  if(numberOfQuestions === 3) showTheResult(score)

}));

// Show the results
function showTheResult(score) {

    if(language.getAttribute('alt') === 'English') {

      // Spanish results
      if(score === 3) {
        resultTitle.textContent = '¡Deberías contratame!';
        resultParagraph.textContent = 'Estás buscando exactamente lo que puedo ofrecerte. Estaría encantada de poder hablar contigo y que conozcas todo lo que soy capaz de aportar a tu empresa.';
      } else if(score === 0) {
        resultTitle.textContent = '¡Nunca digas nunca!';
        resultParagraph.textContent = 'Quizá no tenías en mente contratar a alguien con mis actitudes, pero nunca está de más que nos conozcamos. ¿Quién sabe si estás a punto de descubrir a tu nuevo empleado?';
      } else {
        resultTitle.textContent = '¡Nadie es perfecto!';
        resultParagraph.textContent = 'Según Stephen Hawking, «la perfección no existe... Sin imperfección, ni tú ni yo existiríamos». Hablemos y déjame demostrarte que, a pesar de ser imperfecta, soy la mejor elección para el puesto.';
      }
      
    } else {

      // English results
      if(score === 3) {
        resultTitle.textContent = 'You should hire me!';
        resultParagraph.textContent = 'You are looking for what I can offer you. I would love to speak with you so you know all I can do for your company.';
      } else if(score === 0) {
        resultTitle.textContent = 'Never say never!';
        resultParagraph.textContent = 'Maybe you did not have in mind hiring someone with my attitudes, but it could be nice to have a conversation and know each other. Who knows if you are about to meet your new employee?';
      } else {
        resultTitle.textContent = 'Nobody is perfect';
        resultParagraph.textContent = "According to Stephen Hawking, 'perfection does not exist... Without imperfection, neither you nor I would exist.' Let's talk and let me show you that, despite being imperfect, I am the best choice for the position.";
      }

    }

}

// Translate the page
function translatePage(lang, score) {

  if(lang === 'Spanish') {

    // Translate to Spanish
    language.setAttribute('src', '/images/english.png');
    language.setAttribute('alt', 'English');
    pageLanguage.setAttribute('lang', 'es')
    pageTitle.textContent = '¿Deberías contratarme?'
    title.textContent = 'Contratarme o no contratarme, esa es la cuestión';
    question1.textContent = '¿Buscas un empleado con inteligencia emocional para trabajar bien en equipo?';
    question2.textContent = '¿Quieres un empleado proactivo y que se adapte bien a los cambios?';
    question3.textContent = '¿Necesitas un empleado polifacético capaz de adquirir rápidamente nuevos conocimientos?';
    yes.forEach(text => text.textContent = 'Sí');
    next.forEach(text => text.setAttribute('value', 'Siguiente')); 
    if(numberOfQuestions === 3) showTheResult(score)

  } else {

    // Translate to English
    language.setAttribute('src', '/images/spanish.png');
    language.setAttribute('alt', 'Spanish');
    pageLanguage.setAttribute('lang', 'en')
    pageTitle.textContent = 'Should you hire me?'
    title.textContent = 'To hire me, or not to hire me, that is the question';
    question1.textContent = 'Are you looking for an employee with emotional intelligence to be a team player?';
    question2.textContent = 'Do you want a proactive employee who responds well to changes?';
    question3.textContent = 'Do you need a versatile employee who is capable of learning new knowledge quickly?';
    yes.forEach(text => text.textContent = 'Yes');
    next.forEach(text => text.setAttribute('value', 'Next'));
    if(numberOfQuestions === 3) showTheResult(score)

  } 

}

// Chech the language when clicking the flag
language.addEventListener('click', e => {
  
  let lang = e.target.getAttribute('alt');
  translatePage(lang, score)

})

