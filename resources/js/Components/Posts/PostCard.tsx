import GarbageButton from "../Buttons/garbage_button";

interface Post {
    id: number;
    title: string;
    content: string;
}

interface PostCardProps {
    post: Post; // Define the 'post' prop here, and make sure it matches the structure of your Post type
    onDelete: () => void; // onDelete callback for the delete button
}

const PostCard: React.FC<PostCardProps> = ({ post, onDelete }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p className="text-gray-700">{post.content}</p>
                </div>
                <div>
                    <GarbageButton onClick={onDelete} label="Delete Post" />
                </div>
            </div>
        </div>
    );
};

export default PostCard;
