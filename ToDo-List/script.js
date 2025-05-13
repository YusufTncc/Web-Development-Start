// Taking Doms
const TodoInputDom = document.getElementById("todo-Input");
const TodoAddBtnDom = document.getElementById("add-button");
const TodoListMDom = document.querySelector(".todos");
const clearbtnDom = document.querySelector(".clearbtn");
const alertDom = document.querySelector(".alert");
// Taking Doms


// ! Events
TodoInputDom.addEventListener("change", InputFunction);
TodoAddBtnDom.addEventListener("click", AddFunction);
clearbtnDom.addEventListener("click", ClearFunction);
// ! Events

// !Todo Array
let todos = [];
// !Todo Array

// ! InputText Create For Inner Text
let InputText = "";
// ! InputText Create For Inner Text

// ? Functions

function InputFunction(event) {
    InputText = event.target.value;
}

function AddFunction(e) {
    e.preventDefault();
    if (InputText.trim() === "") {
        alertDom.style.display = "block"
        setTimeout(() => {
            alertDom.style.display = "none"
        }, 1100);
        return;
    }
    todos.unshift({ id: todos.length + 1, text: InputText })
    InputText = "";
    TodoInputDom.value = "";
    DisplayTodo();
}

function DisplayTodo() {
    let result = "";
    if (todos.length < 1) {
        TodoListMDom.innerHTML = `    
       <li class="List-item"><span>List is Empty !!</span></li>
 `;
    } else {
        todos.forEach((item) => {
            result += `    
       <li class="List-item"><span class="todo-text">${item.text}</span>
                <span onclick="deleteFunction(${item.id})";>Delete</span>
            </li>
        `
        })
        TodoListMDom.innerHTML = result;
        let text = document.querySelector(".todo-text");
        console.log(text);
        
        
    }
}

function deleteFunction(id) {
    let Deletetid;

    for (let index in todos) {
        if (todos[index].id == id) {
            Deletetid = index;
        }
    }

    todos.splice(Deletetid, 1)
    DisplayTodo()
}

function ClearFunction(e) {
    e.preventDefault();
    todos.splice(0, todos.length)
    DisplayTodo();
}

DisplayTodo();
// ? Functions

