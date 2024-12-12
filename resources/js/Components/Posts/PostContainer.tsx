// PostSection.tsx
import React, { useState } from 'react';
import PostCard from './PostCard';  
import PostForm from './PostForm';  
import PostButton from '../Buttons/post';  
interface Post {
  id: number;  // Added unique identifier for each post
  title: string;
  content: string;
}

const PostSection: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showCreatePostForm, setShowCreatePostForm] = useState<boolean>(false);

  const handleCreatePost = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setShowCreatePostForm(false); // Close the form after submission
  };

  const handleCancel = () => {
    setShowCreatePostForm(false); // Close the form without saving
  };

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id)); // Delete post by id
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Post Section</h2>

      {showCreatePostForm ? (
        <PostForm onCreatePost={handleCreatePost} onCancel={handleCancel} />
      ) : (
        <div className="flex justify-end mb-4">
          <PostButton onClick={() => setShowCreatePostForm(true)} />
        </div>
      )}

      <div className="overflow-auto max-h-96">
        {posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard
                key={post.id}  
                post={post}  
                onDelete={() => handleDeletePost(post.id)}  
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default PostSection;
