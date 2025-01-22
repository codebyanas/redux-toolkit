import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/library/librarySlice';

export default function AddTask() {
    const [task, setTask] = useState({ text: '', category: '', priority: 'Medium', dueDate: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem(task));
        setTask({ text: '', category: '', priority: 'Medium', dueDate: '' }); // Reset form after submission
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold text-indigo-400">Add New Task</h2>
            <div className="flex flex-col space-y-2">
                <input
                    type="text"
                    placeholder="Task Name"
                    value={task.text}
                    onChange={(e) => setTask({ ...task, text: e.target.value })}
                    className="p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-500 text-white"
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={task.category}
                    onChange={(e) => setTask({ ...task, category: e.target.value })}
                    className="p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-500 text-white"
                />
                <select
                    value={task.priority}
                    onChange={(e) => setTask({ ...task, priority: e.target.value })}
                    className="p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-500 text-white"
                >
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                </select>
                <input
                    type="date"
                    value={task.dueDate}
                    onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
                    className="p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-500 text-white"
                />
                <button
                    type="submit"
                    className="text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded"
                >
                    Add Task
                </button>
            </div>
        </form>
    );
}
