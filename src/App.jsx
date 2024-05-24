import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import ToDoItem2 from "./components/ToDoItem2";
import "./style.css";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <div className="items-container">
          <TodoItem1 />
          <ToDoItem2 />
        </div>
      </center>
    </>
  );
}

export default App;
