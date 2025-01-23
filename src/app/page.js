"use client";
import Header from "@/components/Header";
import TaskList from "@/components/TaskList";
import TaskSection from "@/components/TaskSection";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
  ]);

  const addTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, name: "" }]);
  };

  const updateTaskName = (id, value) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, name: value } : task))
    );
  };
  return (
    <div>
      <Header />
      <TaskList addTask={addTask} />
      <TaskSection
        addTask={addTask}
        tasks={tasks}
        setTasks={setTasks}
        updateTaskName={updateTaskName}
      />
    </div>
  );
}
