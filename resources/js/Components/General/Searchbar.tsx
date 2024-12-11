export default function Searchbar() {
    return (
        <div className="bg-gray-100 rounded-full p-4 flex items-center w-1/4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input className="rounded-lg pl-1 mx-2 flex-grow focus:ring focus:ring-blue-500 focus:ring-2 focus:outline-none transition duration-100" type="text" placeholder="Search for a club" />
            <button className="bg-red-500 text-white rounded-lg px-1 hover:bg-black h-full">Search</button>
        </div>
    );
}