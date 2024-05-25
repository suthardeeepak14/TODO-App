import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItems from "./components/ToDoItems";
import "./style.css";

function App() {
  const todoItems = [
    {
      name: "Buy Apple",
      dueDate: "4/4/24",
    },
    {
      name: "Buy Egg",
      dueDate: "4/4/24",
    },
    {
      name: "Buy Milk",
      dueDate: "4/4/24",
    },
    {
      name: "Buy Book",
      dueDate: "4/4/24",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <ToDoItems todoItems={todoItems}></ToDoItems>
      </center>
    </>
  );
}

export default App;
