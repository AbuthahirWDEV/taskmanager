import React, { use, useEffect, useState } from "react";

const AddTask = ({ onAddtask, editMode, editValue }) => {
  const [taskName, setTaskName] = useState("");
  const [toggle, setToggle] = useState(false);
  const [category, setCategory] = useState("work");
  const categoryOptions = ["work", "personal", "study", "other"];

  //   const [formData , setFormData] = useState({
  //     taskName:
  //   })

  useEffect(() => {
    if (editMode && editValue) {
      setTaskName(editValue.taskName);
      setToggle(editValue.status);
      setCategory(editValue.selectedcategory);
      
    }
  }, [editMode, editValue]);

  const reset = () => {
    setTaskName("");
    setToggle(false);
    setCategory("work");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!taskName) return;

    const newTask = {
      id: editMode ? editValue.id : Date.now(),
      taskName: taskName,
      selectedcategory: category,
      status: toggle,
    };

    // console.log(newTask)
    onAddtask(newTask);
    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>AddTask</h2>
      <label>Task Name</label>
      <input
        type="textbox"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <label>Category</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categoryOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label>Task status</label>
      <input
        type="checkbox"
        checked={toggle}
        onChange={() => setToggle(!toggle)}
      />

      <button>Add Task</button>
    </form>
  );
};

export default AddTask;
