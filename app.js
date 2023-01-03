//window.alert('page loaded!');
document.addEventListener('DOMContentLoaded', ()=> {
/*========= GLOBAL SCOPE =============*/
/*========= VARIABLE DECLARATION =============*/

const form = document.getElementById('registrar');
const input = form.querySelector('input');
const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');
const editButton = document.createElement('button');

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckbox = document.createElement('input');

filterLabel.textContent = 'Hide those who haven\'t responded yet';
filterCheckbox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
mainDiv.insertBefore(div, ul);

filterCheckbox.addEventListener('change', (e) =>{
const isChecked = e.target.checked;
const lis = ul.children; //TARGETING ALL ELEMENT UNDER LIST UL ELEMENT
if (isChecked) {
    for (let i = 0; i < lis.length; i += 1) {
        let li = lis[i];
        if (li.className === 'responded') {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }
    }
} else {
    for (let i = 0; i < lis.length; i += 1) {
        let li = lis[i];
        li.style.display = '';
    }
}
})


function createLI(text) {
      
    function createElement(elementName, property, value) {
        const element = document.createElement(elementName);
        element[property] = value;
        return element;
    }

    function appendToLI(elementName, property, value) {
        const element = createElement(elementName, property, value);
        li.appendChild(element);
        return element;
    }
    
    const li = document.createElement('li');
    
    //const span = document.createElement('span'); /* BEFORE REFACTORING */
    //span.textContent = text;
    appendToLI('span', 'textContent', text);
    
    /* const label = appendToLI('label', 'textContent', "confirmed"); /* CONFIRMED LABEL */
    /*const checkbox = createElement('input', 'type', "checkbox"); /* CHECKBOX APPENDED TO CONFIRMED LABEL */ 
    appendToLI('label', 'textContent', "confirmed")
    .appendChild(createElement('input', 'type', "checkbox"));
    //label.appendChild(checkbox);
    
    
    appendToLI('button', 'textContent', 'edit'); /* EDIT BUTTON */
    appendToLI('button', 'textContent', 'remove'); /* REMOVE BUTTON */
   
    return li;
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    /* CREATING NEW LI ITEMS */
    if (input.value === "" || input.value === null) {
        alert("Name must be filled out");
        return false;
    } else {
        const text = input.value;
        input.value = "";
        const li = createLI(text);
        ul.appendChild(li); //target.createThisElementUnderThisTarget(elementToCreate)
	    
	
}
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
    const action = button.textContent;
    const nameActions = {
        save: () => {
            const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = "edit";
            },
        
        edit: () => {
            const span = li.firstElementChild;
            const input = document.createElement('input');
            input.value = span.textContent;
            input.type = 'text';
            li.insertBefore(input, span);
            li.removeChild(span);
            button.textContent = "save";
            },
        
        remove: () => {
            ul.removeChild(li);
            }
    }
   nameActions[action]();
    } 
});
});
