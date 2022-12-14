//window.alert('page loaded!');

/*========= VARIABLE DECLARATION =============*/
const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

function createLI(text) {
      /*========= INSIDE FUNCTION
      VARIABLE DECLARATION =============*/
    const li = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const button = document.createElement('button');

    li.textContent = text;
    label.textContent = "confirmed";

    /* CHECKBOX */
    checkbox.type = "checkbox";
    label.appendChild(checkbox);
    li.appendChild(label);

    /*REMOVE BUTTON  */
    button.textContent = "remove";
    li.appendChild(button);
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
        const li = e.target.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
    }   
});

