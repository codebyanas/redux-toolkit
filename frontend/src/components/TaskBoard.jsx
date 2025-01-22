import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../features/library/librarySlice';

export default function TaskBoard() {
    const itemsLibrary = useSelector((state) => state.libraryState || []);  // Safe check
    const dispatch = useDispatch();

    return (
        <div className="task-board">
            <h2 className="text-lg font-semibold">Task Board</h2>
            {itemsLibrary.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                itemsLibrary.map((item) => (
                    <div key={item.id} className="task-item bg-gray-800 p-4 rounded mb-3 shadow-md">
                        <h3 className="text-white font-bold">{item.text}</h3>
                        <p className="text-gray-400">{item.category}</p>
                        <p className="text-gray-500">Priority: {item.priority}</p>
                        <p className="text-gray-500">Due: {item.dueDate}</p>
                        <button
                            onClick={() => dispatch(deleteItem(item.id))}
                            className="text-white bg-red-500 hover:bg-red-600 py-1 px-4 rounded mt-2"
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}
