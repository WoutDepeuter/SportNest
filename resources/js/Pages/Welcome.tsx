
import Default from '@/Components/Buttons/default';
import Pagination from '@/Components/Buttons/pagination'
import BasicRating from '@/Components/Buttons/Rating';
import Upload from '@/Components/Buttons/upload_files';
import { Head } from '@inertiajs/react'
import { MouseEventHandler } from 'react';


export default function Welcome({ user, test }: {user: string, test: number}) {
    const handlePagination: MouseEventHandler = (event) => {
        const direction = (event.target as HTMLButtonElement).innerText.toLowerCase();
        alert(`You clicked ${direction}`); 
      };
    return (
       <div>
           <Head title="Welcome" />
           <h1 className='bg-red-500'>Welcome</h1>
           <p className='m-10'>Hello {user} {test}, welcome to your first Inertia app wow!!</p>
           <div>
      <h1>Pagination Test</h1>
      <Pagination onClick={handlePagination} />
      <h1>Rating Test</h1>
      <BasicRating />
      <h1>Upload File Test</h1>
      <Upload/>

      <h1>Default Button</h1>
      <Default/>
    </div>
       </div>
    )


}
