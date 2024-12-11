export default function Searchbar() {
    return (
        <div className="flex itemst-center justify-center">
            <div className="bg-gray-100 flex items-center p-4 w-4/5 rounded-lg md:w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-red-500 mx-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input className="w-6/12 rounded-lg mx-2 pl-1 flex-grow md:w-3/12 focus:ring focus:ring-blue-500 focus:ring-2 focus:outline-none transition duration-100" type="text" placeholder="Search" name="query" />
                <button className="bg-red-500 text-white rounded-lg px-1 md:px-4 hover:bg-black h-full" type="submit">Search</button>
            </div>
        </div>
    );
}