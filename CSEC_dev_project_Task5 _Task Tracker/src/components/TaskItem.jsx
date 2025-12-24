import { useTasks } from "../store/taskContext";

const TaskItem = ({ task }) => {
    const { toggleTask, deleteTask } = useTasks();

    return (
        <li className={`task-item ${task.completed ? "completed" : ""}`}>
            <label className="task-left">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
                <span>{task.text}</span>
            </label>

            <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
            >
                ✖
            </button>
        </li>
    );
};

export default TaskItem;
