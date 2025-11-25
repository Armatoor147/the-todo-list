"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

const MY_VARIABLE = 'Hello World! Here is Vincent!';
console.log(MY_VARIABLE);

const API_URL = process.env.NEXT_PUBLIC_API_URL; // || 'http://localhost:3001';
console.log("API_URL:", process.env.NEXT_PUBLIC_API_URL); // For debugging

export default function TodosPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    console.log(MY_VARIABLE);
    console.log("API_URL:", process.env.NEXT_PUBLIC_API_URL);
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/tasks`);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/tasks`, {
        title,
        description,
      });
      console.log(response)
      setTasks([...tasks, response.data]);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleTask = async (id: string) => {
    try {
      const task = tasks.find((t) => t._id === id);
      if (!task) return;
      const response = await axios.put(`${API_URL}/api/tasks/${id}`, {
        title: task.title,
        description: task.description,
        completed: !task.completed,
      });
      setTasks(tasks.map((t) => (t._id === id ? response.data : t)));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/api/tasks/${id}`);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-purple-500 p-4">
      <div className="w-full max-w-2xl p-8 bg-green-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-black text-center mb-8">
          TODO List
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 mb-6">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <button
            onClick={addTask}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Add Task
          </button>
        </div>
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="flex items-center p-3 bg-white rounded shadow-sm"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task._id)}
                className="mr-3 h-5 w-5"
              />
              <span
                className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}
              >
                <strong>{task.title}</strong> - {task.description}
              </span>
              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
