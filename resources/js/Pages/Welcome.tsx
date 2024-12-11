
import Default from '@/Components/Buttons/default';
import DeleteButton from '@/Components/Buttons/delete_button';
import GarbageButton from '@/Components/Buttons/garbage_button';
import Pagination from '@/Components/Buttons/pagination';
import PostButton from '@/Components/Buttons/post';
import PriceRange from '@/Components/Buttons/priceRange';
import BasicRating from '@/Components/Buttons/Rating';
import RangeSlider from '@/Components/Buttons/slider';
import Upload from '@/Components/Buttons/upload_files';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome({ user, test }: { user: string, test: number }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 100; // Example: 100 items in total
  const itemsPerPage = 10; // Example: 10 items per page

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Here, you can fetch data for the selected page
    console.log(`Page changed to: ${page}`);
  };

  const handleDelete = () => {
    alert('Item deleted!');
  };

  const handlePost = () => {
    alert('Post created!');
  };

  const handleGarbage = () => {
    alert('Item deleted!');
  };

  function ParentComponent() {
    const [rating, setRating] = useState<number | null>(2);

    const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
      setRating(newValue);
    };

    const totalPages = 10; // Example: 10 pages of data

    return (
      <div>
        <Head title="Welcome" />
        <h1 className='bg-red-500'>Welcome</h1>
        <p className='m-10'>Hello {user} {test}, welcome to your first Inertia app wow!!</p>
        <div>
          <h1 className="text-lg font-bold mb-4">Pagination Test</h1>
          <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
          <h1 className="text-lg font-bold mb-4">Rating Test</h1>
          <BasicRating value={rating} onChange={handleRatingChange} />
          <h1 className="text-lg font-bold mb-4">Upload File Test</h1>
          <Upload />
          <h1 className="text-lg font-bold mb-4">Default Button</h1>
          <Default text='Whatever'/>
          <h1 className="text-lg font-bold mb-4">Delete Button Example</h1>
          <DeleteButton onClick={handleDelete} />
          <h1 className="text-lg font-bold mb-4">Post Button Example</h1>
          <PostButton onClick={handlePost} label="Create Post" />
          <h1 className="text-lg font-bold mb-4">Garbage Button Example</h1>
          <GarbageButton onClick={handleGarbage} />
          <h1 className="text-lg font-bold mb-4">Price Range Example</h1>
          <PriceRange />
        </div>
      </div>
    );
  }
}
