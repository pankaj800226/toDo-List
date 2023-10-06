const item = document.querySelector("#item");
const toDo = document.querySelector("#to-do-box");

// const task = localStorage.getItem("task")
// ? JSON.parse(localStorage.getItem("task"))
// :[];

// addtodo();

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addtodo(this.value);
    this.value = "";
    
  }
});

const addtodo = (item) => {
  let ListItem = document.createElement("li");

  ListItem.innerHTML = `${item} <i class="fa-solid fa-trash"></i>`;

  ListItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  ListItem.querySelector("i").addEventListener("click", () => {
    ListItem.remove();
  });
  
  toDo.appendChild(ListItem);
};
// localStorage.setItem("task", JSON.stringify(item));
// addtodo()


