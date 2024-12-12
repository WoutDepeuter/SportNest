import React, { useState } from 'react';
import Submit from '../Buttons/Submit';
import CancelButton from '../Buttons/Cancel';

interface PostFormProps {
  onCreatePost: (newPost: { id: number; title: string; content: string }) => void;
  onCancel: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onCreatePost, onCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      alert('Please fill in both title and content');
      return;
    }

    const newPost = {
      id: Date.now(), // Generate a unique id
      title,
      content
    };

    onCreatePost(newPost); // Call onCreatePost with the new post containing the id
    setTitle('');  // Clear the input fields after submit
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-4">Create New Post</h3>

      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded w-full"
          placeholder="Enter post title"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded w-full"
          placeholder="Enter post content"
          required
        />
      </div>

      <div className="flex justify-end gap-4">
        <CancelButton onClick={onCancel} />
        
        <Submit label="Submit" />
      </div>
    </form>
  );
};

export default PostForm;
