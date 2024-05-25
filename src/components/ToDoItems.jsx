import ToDoItem from "./ToDoItem";
const ToDoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <ToDoItem key={item} todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
};

export default ToDoItems;
