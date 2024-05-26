import { useState } from "react";
import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItems from "./components/ToDoItems";
import "./style.css";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added: ${itemName} date: ${itemDueDate}`);
    const newTodoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItem);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`item Deleted:${todoItemName}`);
  };
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddToDo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <ToDoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></ToDoItems>
      </center>
    </>
  );
}

export default App;
