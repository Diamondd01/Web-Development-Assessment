console.log("hello world");


function handleSubmit(event) {
	event.preventDefault();
  
	alert('Form submitted successfully!');
  }
  
  let form = document.querySelector('#contact-form');
  form.addEventListener('submit', handleSubmit);

const rubberDuckPicture = document.querySelector('.RubberDuck');

rubberDuckPicture.addEventListener('mouseover', () => {
	alert("You're the greatest");
  });

