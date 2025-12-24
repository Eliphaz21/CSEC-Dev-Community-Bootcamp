import { useTasks } from "../store/taskContext";

const Stats = () => {
    const { tasks } = useTasks();

    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const remaining = total - completed;

    return (
        <div className="stats-container">
            <h2 className="stats-title">Task Statistics</h2>

            <div className="stats-grid">
                <div className="stat-card">
                    <p className="stat-label">Total Tasks</p>
                    <h3 className="stat-number">{total}</h3>
                </div>

                <div className="stat-card completed">
                    <p className="stat-label">Completed</p>
                    <h3 className="stat-number">{completed}</h3>
                </div>

                <div className="stat-card remaining">
                    <p className="stat-label">Remaining</p>
                    <h3 className="stat-number">{remaining}</h3>
                </div>
            </div>
        </div>
    );
};

export default Stats;
