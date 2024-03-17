const userInput = document.querySelector('input');
const addBtn = document.querySelector('#add-btn');
const taskBar = document.querySelector('#show-task');

function createTaskBar(value) {
  const p = document.createElement('p');

  p.innerHTML = value;
  taskBar.appendChild(p);
}

function validation() {
  if (userInput.value == '') {
    return false;
  } else {
    return true;
  }
}

addBtn.addEventListener('click', function () {
  if (validation()) {
    createTaskBar(userInput.value);
    userInput.value = '';
  } else {
    alert = 'Enter the correct task';
  }
});

taskBar.addEventListener("click", function(event){
  event.target.classList.toggle("green");
});
