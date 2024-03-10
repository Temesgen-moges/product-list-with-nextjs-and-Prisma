// Post.jsx
import React from 'react';
import DeletePostButton from './DeletePostButton';

export default function Post({ id, title, content, authorName }) {
  return (
    <div className="flex flex-col bg-white border rounded shadow-md p-4 m-4">
      <div className="mb-4">
        <h3 className="text-lg font-bold">{authorName}</h3>
      </div>
      <div className="mb-4">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
      <div className="mt-auto">
        <DeletePostButton postId={id} />
      </div>
    </div>
  );
}
