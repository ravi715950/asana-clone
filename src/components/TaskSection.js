// pages/index.js
import { Checkbox } from "@mui/material";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function TaskSection({
  addTask,
  tasks,
  setTasks,
  updateTaskName,
}) {
  return (
    <div className="text-white flex justify-center items-center">
      <div className="w-full py-5 rounded-md">
        <div>
          <h2 className="text-lg font-semibold mb-3">Do today</h2>
          <div className="border-b border-gray-700 rounded-md">
            {tasks.map((task, index) => (
              <div
                key={task.id}
                className="flex items-center border-b border-gray-700 last:border-b-0"
              >
                <Checkbox
                  icon={<CheckCircleOutlineIcon sx={{ color: "white" }} />}
                  checkedIcon={<CheckCircleIcon sx={{ color: "white" }} />}
                />
                <input
                  type="text"
                  value={task.name}
                  onChange={(e) => updateTaskName(task.id, e.target.value)}
                  placeholder="Write a task name"
                  className="bg-transparent text-white flex-grow px-4 py-3 outline-none"
                />
                <button className="p-2">
                  <span className="text-gray-500">&#x25B2;</span>
                </button>
                <button className="p-2">
                  <span className="text-gray-500">&#x25BC;</span>
                </button>
                <div className="p-2">
                  <button className="text-gray-500 border border-gray-600 rounded px-3 py-1">
                    Only me
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={addTask}
            className="mt-4 text-blue-500 hover:underline flex items-center"
          >
            Add task...
          </button>
        </div>
      </div>
    </div>
  );
}
