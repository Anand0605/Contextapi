import { useTaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, toggleTask, removeTask } = useTaskContext();

  if (!tasks.length) {
    return <p className="text-gray-500">No tasks available!</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between p-2 border rounded-lg"
        >
          <span
            onClick={() => toggleTask(task.id)}
            className={`flex-1 cursor-pointer ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.title}
          </span>
          <button
            onClick={() => removeTask(task.id)}
            className="px-3 py-1 text-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
