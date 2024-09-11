let buttons = Array.from(document.querySelectorAll('.opcion button'));
let currentlySelectedButton = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentlySelectedButton) {
      currentlySelectedButton.style = "";
    }
    button.style = "background-color: #000; color: #fff"; 
    currentlySelectedButton = button; 
  });
});
