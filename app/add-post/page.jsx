"use client"
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const router = useRouter();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch('/api/add-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      router.refresh();
    } catch (error) {
      console.error(error);
    }

    setTitle('');
    setContent('');
  };

  return (
    <main className="max-w-2xl mx-auto p-4 text-white">
      <Link href={'/'} className="text-blue-500 underline">
        View Feed
      </Link>
      <h1 className="text-3xl font-bold my-4">Add Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-bold">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
          />
        </div>
        <div>
          <label htmlFor="content" className="block font-bold">
            Content:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
