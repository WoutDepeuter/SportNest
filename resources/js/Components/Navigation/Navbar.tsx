export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="white" className="h-8 w-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
