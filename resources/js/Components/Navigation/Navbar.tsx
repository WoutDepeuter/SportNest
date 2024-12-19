import {UserIcon} from "@heroicons/react/24/outline";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 w-full">
            <ul className="flex justify-between items-center">
                <li className="flex-shrink-0">
                    <a href="/">
                        <img src="/logo.png" alt="Home" className="h-16 w-16" />
                    </a>
                </li>
                <li className="flex-1 text-center">
                    <h1 className="text-white text-lg">SportNest</h1>
                </li>
                <li className="flex-shrink-0 ml-auto">
                    <a href="/login">
                       <UserIcon className="h-8 w-8 text-white" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}
