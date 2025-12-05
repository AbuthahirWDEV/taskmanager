import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
function App() {
  const [value, setValue] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("All");

  const handleAddTask = (newTask) => {
    // destrcuture the previous value and add new task
    // setValue([...value , newTask])
    if (edit) {
      setValue((prev) =>
        prev.map((item) => (item.id === newTask.id ? newTask : item))
      );

      setEdit(false);
      setEditValue(null);
      return
    }
    setValue((prev) => [...prev, newTask]);
  };

  const handleDelete = (taskId) => {
    const filterList = value.filter((item) => item.id !== taskId);
    setValue(filterList);
  };

  const handleEdit = (taskId) => {
    const editList = value.find((item) => item.id === taskId);
    setEdit(true);
    setEditValue(editList);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleFilter = (filterTerm) => {
    setFilterTerm(filterTerm);
  };

  const derivedFilterList = value
    .filter((item) =>
      item.taskName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => {
      if (filterTerm === "All") return true;
      return item.selectedcategory.toLowerCase() === filterTerm.toLowerCase();
    });

  return (
    <div className="App">
      <AddTask
        onAddtask={handleAddTask}
        editMode={edit}
        editValue={editValue}
      />
      <SearchBar onSearch={handleSearch} />
      <Filter onFilter={handleFilter} />
      <TaskList
        list={derivedFilterList}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
