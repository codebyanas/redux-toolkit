import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/library/librarySlice';

export default function AddItems() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addItemHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addItem(input));
            setInput('');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="bg-gray-700 shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-semibold text-white mb-6 text-center">
                    Add New Item
                </h1>
                <form onSubmit={addItemHandler} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            className="w-full bg-gray-800 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-100 py-2 px-4 leading-6 transition-colors duration-200 ease-in-out"
                            placeholder="Enter an item..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 font-medium rounded-lg text-lg py-2 transition-all"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
}
