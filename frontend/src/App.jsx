import React from 'react';
import AddTask from './components/AddTask';
import TaskBoard from './components/TaskBoard';

export default function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-400 text-gray-100">
            <header className="py-6 bg-gray-800 shadow-md">
                <h1 className="text-center text-3xl font-bold">TaskFlow</h1>
            </header>
            <main className="max-w-6xl mx-auto p-6 space-y-8">
                <section>
                    <AddTask />
                </section>
                <section>
                    <TaskBoard />
                </section>
            </main>
        </div>
    );
}
