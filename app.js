//window.alert('page loaded!');

/*========= GLOBAL SCOPE =============*/
/*========= VARIABLE DECLARATION =============*/
const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

function createLI(text) {
      /*========= FUNCTION SCOPE========*/
      /*===VARIABLE DECLARATION ========*/
    const li = document.createElement('li');
    const span = document.createElement('span');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const editButton = document.createElement('button');
    const removeButton = document.createElement('button');

    span.textContent = text;
    li.appendChild(span);
    label.textContent = "confirmed";

    /* CHECKBOX */
    checkbox.type = "checkbox";
    label.appendChild(checkbox);
    li.appendChild(label);
    
    /*EDIT BUTTON  */
    editButton.textContent = "edit";
    li.appendChild(editButton);
   
    /*REMOVE BUTTON  */
    removeButton.textContent = "remove";
    li.appendChild(removeButton);
    return li;

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    /* CREATING NEW LI ITEMS */
    const text = input.value;
    input.value = "";
    const li = createLI(text);
    ul.appendChild(li); //target.createThisElementUnderThisTarget(elementToCreate)
    
});

ul.addEventListener('change', (e) => {
    const checkbox = e.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;

//Conditional (ternary) operator
checked ? listItem.className = "responded" : listItem.className = " " ;

});

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        if (button.textContent === 'remove') {
            ul.removeChild(li);
        } else if (button.textContent === 'edit') { 
          const span = li.firstElementChild;
          const input = document.createElement('input');
          input.type = 'text';
          input.value  = span.textContent;
          li.insertBefore(input, span);
          li.removeChild(span);
         // li.textContent.replace(`${editButton}, ${removeButton}`);
        }
    } 
});

