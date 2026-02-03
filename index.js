console.log('my code is running')

// Getting main varaibles from the html doc
const textInput = document.querySelector('.text-input');
const submit = document.querySelector('.submit-btn');
const ul = document.querySelector('.task-ul');

submit.disabled = true; // had to look up how to disable inputs

// check if text is empty, then disable the button.
textInput.addEventListener("input", () => {
  textInput.value !== '' ? submit.disabled = false : submit.disabled = true;
});

//---------------------------------
// Add list item to unordered list.
//---------------------------------
submit.addEventListener("click", () => {
  const li = document.createElement('li');
  const button = document.createElement('button');
  const span = document.createElement('span')

  button.textContent = "🗑️"; // had to look up textContent
  button.classList.add('trash-btn'); // had to look up adding class in js
  span.textContent = textInput.value;
  span.classList.add('task')

  li.appendChild(button);
  li.appendChild(span);
  // li.appendChild(document.createTextNode(textInput.value));
  ul.appendChild(li);
  console.log(span.value)
});

//-------------------------------------------
// Delete task from list AND cross them out. 'bec im lazy and scared'
//-------------------------------------------
ul.addEventListener("click", (item) => {
  // item.target -> exact element that is clicked...
  const currentLi = item.target.parentNode; // <li>
  const parentUl = currentLi.parentNode; // <ul>

  if(item.target.classList.contains('trash-btn')){ // had to look this up
    parentUl.removeChild(currentLi);
    return; // need this or it breaks the other if statement
  }

  if(item.target.classList.contains('task')){ // marking tasks
    // console.log(item.target.textContent);
    item.target.classList.toggle('task-complete'); // had to look up toggle()
  }
});


// console.log(textInput.className)
