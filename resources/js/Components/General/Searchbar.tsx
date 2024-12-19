import {MagnifyingGlass} from "react-loader-spinner";

export default function Searchbar() {
    return (
        <div className="flex itemst-center justify-center">
            <div className="bg-gray-100 flex items-center p-4 w-4/5 rounded-lg md:w-1/2">
                <MagnifyingGlass />
                <input className="w-6/12 rounded-lg mx-2 pl-1 flex-grow md:w-3/12 focus:ring focus:ring-blue-500 focus:ring-2 focus:outline-none transition duration-100" type="text" placeholder="Search" name="query" />
                <button className="bg-red-500 text-white rounded-lg px-1 md:px-4 hover:bg-black h-full" type="submit">Search</button>
            </div>
        </div>
    );
}
