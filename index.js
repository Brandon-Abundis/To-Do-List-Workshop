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

  li.classList.add('task-item')
  button.textContent = "✕"; // had to look up textContent
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
  // const currentLi = item.target.parentNode; // <li>
  const currentLi = item.target.closest("li"); // safer version using .closest()
  const parentUl = currentLi.parentNode; // <ul>
  const span = currentLi.querySelector('.task');

  if(item.target.classList.contains('trash-btn')){ // had to look this up
    parentUl.removeChild(currentLi);
    return; // need this or it breaks the other if statement
  }

  // apparently toggle() just works like this
  span.classList.toggle('span-crossed');
  currentLi.classList.toggle('task-item-complete')

  // if(item.target.classList.contains('task-item')){ // marking tasks
  //   // console.log(item.target.textContent);
  //   currentLi.classList.toggle('task-item-complete') // had to look up toggle()
  //   if(item.target.classList.contains('task')){
  //     item.target.classList.toggle('span-crossed');
  //   }
  // }
});


// console.log(textInput.className)
