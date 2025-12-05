import React, { use, useState } from "react";

const AddTask = ({onAddtask}) => {
  const [taskName, setTaskName] = useState("");
  const [toggle, setToggle] = useState(false);
  const [category, setCategory] = useState("");
  const categoryOptions = ["work", "personal", "study", "other"];

//   const [formData , setFormData] = useState({
//     taskName:
//   })

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      taskName: taskName,
      selectedcategory: category,
      status: toggle,
    };

    // console.log(newTask)
    onAddtask(newTask)
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
