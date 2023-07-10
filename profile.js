const favColor = document.querySelector('#color');
favColor.addEventListener('click', () => {
  alert("My favorite color is Lavender");
});

const favPlace = document.querySelector('#place');
favPlace.addEventListener('click', () => {
  alert("My favorite place is Mods Pizza");
});

const favRitual = document.querySelector('#ritual');
favRitual.addEventListener('click', () => {
  alert("My favorite ritual would be Cleansing any space with incense.");
});

const questionsBtn = document.querySelector('#questions');
questionsBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  alert("Your question has been submitted");
});
