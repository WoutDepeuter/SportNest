
import Default from '@/Components/Buttons/default';
import DeleteButton from '@/Components/Buttons/delete_button';
import GarbageButton from '@/Components/Buttons/garbage_button';
import Pagination from '@/Components/Buttons/pagination'
import PostButton from '@/Components/Buttons/post';
import BasicRating from '@/Components/Buttons/Rating';
import PriceRangeSlider from '@/Components/Buttons/slider';
import Upload from '@/Components/Buttons/upload_files';
//import DeleteButton from '@/Components/Buttons/DeleteButton';

import { Head } from '@inertiajs/react'
import { MouseEventHandler } from 'react';


export default function Welcome({ user, test }: {user: string, test: number}) {
    const handlePagination: MouseEventHandler = (event) => {
        const direction = (event.target as HTMLButtonElement).innerText.toLowerCase();
        alert(`You clicked ${direction}`); 
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

const handlePriceChange = (value: number[]) => {
  console.log('Selected price range:', value); // Do something with the price range
};
    return (
       <div>
           <Head title="Welcome" />
           <h1 className='bg-red-500'>Welcome</h1>
           <p className='m-10'>Hello {user} {test}, welcome to your first Inertia app wow!!</p>
           <div>
      <h1 className="text-lg font-bold mb-4">Pagination Test</h1>
      <Pagination onClick={handlePagination} />
      <h1 className="text-lg font-bold mb-4">Rating Test</h1>
      <BasicRating />
      <h1 className="text-lg font-bold mb-4">Upload File Test</h1>
      <Upload/>

      <h1 className="text-lg font-bold mb-4">Default Button</h1>
      <Default/>

      <h1 className="text-lg font-bold mb-4">Delete Button Example</h1>
            <DeleteButton onClick={handleDelete} />

      <h1 className="text-lg font-bold mb-4">Post Button Example</h1>
            <PostButton onClick={handlePost} label="Create Post" />


      <h1 className="text-lg font-bold mb-4">Garbage Button Example</h1>
      <GarbageButton onClick={handleGarbage}/>

      <h1 className="text-lg font-bold mb-4">Garbage Button Example</h1>
      <PriceRangeSlider/>


    </div>
       </div>
    )


}
