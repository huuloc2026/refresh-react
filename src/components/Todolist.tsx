import { useState } from "react";

export interface IToDo {
  id: number;
  job: string;
  done: boolean; 
}

const Todolist = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDoList, setToDoList] = useState<IToDo[]>([
    { id: 1, job: "Studying English", done: false },
  ]);

  const handleClick = () => {
    if (toDo.trim() === "") return; 
    const newJob: IToDo = { id: Date.now(), job: toDo, done: false }; 
    setToDoList((prev) => [...prev, newJob]);
    setToDo("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDo(e.target.value);
  };

  const handleDone = (id: number) => {
    setToDoList((prev) =>
      prev.map(
        (item) => (item.id === id ? { ...item, done: !item.done } : item) 
      )
    );
  };

  const handleDelete = (id: number) => {
    setToDoList((prev) => prev.filter((item) => item.id !== id)); 
  };

  return (
    <div>
      <input
        type="text"
        value={toDo}
        onChange={handleChange}
        placeholder="Enter a to-do"
      />
      <button onClick={handleClick}>Add to-do</button>
      <div>
        <h1>List to do:</h1>
        <ul>
          {toDoList.map((item) => (
            <li
              key={item.id}
              style={{
                color: item.done ? "green" : "red", 
              }}
            >
              {item.job} -{" "}
              <button onClick={() => handleDone(item.id)}>
                {item.done ? "Undo" : "Done"}{" "}
              </button>{" "}
              - <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todolist;
