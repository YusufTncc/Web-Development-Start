let AddbtnDom = document.getElementById("submit");
let ToDoList = document.getElementById("ToDo-List");
let ToDoInput = document.getElementById("ToDo-input");
let ToDoReset = document.getElementById("clear");
let alertDom = document.querySelector(".alert")


function alertDomRemove(){
    alertDom.style.display = ("none");
}

AddbtnDom.addEventListener("click", function (event) {
    event.preventDefault();
   if(ToDoInput.value){
    let ListLi = document.createElement("li");
    let listparagraph = document.createElement("p");
    let listremove = document.createElement("span");
    listparagraph.innerHTML = ToDoInput.value;
    listremove.innerHTML = ("X");
    ToDoInput.value = ("");
    listremove.classList.add("LiRemove");
    ListLi.classList.add("ToDo-List-Items")

    ListLi.appendChild(listparagraph)
    ListLi.appendChild(listremove)
    ToDoList.appendChild(ListLi)

    listremove.addEventListener("click",function(){
        ListLi.remove();
    })

    ToDoReset.addEventListener("click",function(){
        ListLi.remove();
    })
    alertDom.style.display = "none";
    ListLi.addEventListener("click",function(){
        ListLi.classList.toggle("Listli");
    })
   }else{
    alertDom.style.display = "flex";
   }
})
