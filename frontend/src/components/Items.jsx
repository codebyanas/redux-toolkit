import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../features/library/librarySlice';

export default function Items() {
    const itemsLibrary = useSelector((state) => state.libraryState.libraryState); // Ensure correct state access
    const dispatch = useDispatch();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-semibold text-white mb-6 text-center">Library Items</h1>
                {itemsLibrary.length > 0 ? (
                    <div className="space-y-4">
                        {itemsLibrary.map((item) => (
                            <div
                                key={item.id}
                                className="bg-gray-700 shadow-md rounded-lg p-4 flex justify-between items-center"
                            >
                                <div>
                                    <h2 className="text-lg font-medium text-white">{item.text}</h2>
                                    {item.description && (
                                        <p className="text-gray-400 text-sm">{item.description}</p>
                                    )}
                                </div>
                                <button
                                    onClick={() => dispatch(deleteItem(item.id))}
                                    className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-400 text-center mt-12">
                        No items found. Add some items to get started!
                    </p>
                )}
            </div>
        </div>
    );
}
