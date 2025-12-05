import React from "react";

const TaskList = ({ list, onDelete, onEdit }) => {

  return (
    <div>
      {list.length === 0 ? (
        <div>No tasks... </div>
      ) : (
        <ul>
          {list?.map((item) => (
            <li key={item.id}>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  border: "1px solid black",
                  margin: "10px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  width: "600px",
                }}
              >
                <div>
                  <h5>{item.taskName}</h5>
                  <p>{item.selectedcategory}</p>
                  <p>{item.status ? "Done" : "need to work "}</p>
                </div>
                <div>
                  <button onClick={() => onEdit(item.id)}>Edit</button>
                  <button onClick={() => onDelete(item.id)}>Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
