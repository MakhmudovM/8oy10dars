import React, { useState } from "react";
import { useCollection } from "../hooks/useColection";
import { useSelector } from "react-redux";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
// Uncomment if using react-hot-toast
// import { toast } from 'react-hot-toast';

const Home = () => {
  const { user } = useSelector((state) => state.userState);
  const { data } = useCollection("tasks", ["uid", "==", user.uid]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      
      alert("Title and Description cannot be empty");
      return;
    }
    const newTask = { title, description, uid: user.uid, id: Math.random() };
    addDoc(collection(db, "tasks"), newTask)
      .then(() => {
       
        setTitle("");
        setDescription("");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const handleDelete = (taskId) => {
    const taskRef = doc(db, "tasks", taskId);
    deleteDoc(taskRef);
  };

  return (
    <div className="max-w-[1100px] mx-auto px-5 py-10">
      <h1 className="text-center text-5xl mb-10 font-bold text-gray-800">Tasks</h1>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-end gap-4 mb-10">
        <label className="flex flex-col">
          <span className="font-semibold text-gray-700">Title</span>
          <input
            className="p-2 border rounded-md mt-1"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-semibold text-gray-700">Description</span>
          <input
            className="p-2 border rounded-md mt-1"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
        </label>
        <button type="submit" className="btn btn-primary py-2 px-4 mt-4 md:mt-0">
          Add
        </button>
      </form>
      <ul className="bg-gray-100 w-full md:w-[800px] mx-auto p-4 rounded-lg shadow-md">
        {data && data.map((task) => (
          <li
            className="border-b p-4 shadow-sm flex justify-between items-center hover:bg-gray-50 transition-colors"
            key={task.id}
          >
            <span className="text-lg font-medium text-gray-800">{task.title}</span>
            <button
              onClick={() => handleDelete(task.id)}
              className="btn btn-sm bg-red-600 text-white"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
