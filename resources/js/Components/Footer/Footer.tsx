export default function Footer() {
    return (
        <footer className="bg-gray-800 p-4 w-full">
            <div className="flex items-center">
                <div className="mb-4 md:mb-0">
                    <a href="#" className="text-lg font-bold text-white">SportNest</a>
                    <p className="text-sm text-white">© 2024 Programming Project</p>
                </div>
                <a href="#" className="ml-auto bg-gray-100 rounded-full px-4 py-2 transition-colors duration-200 hover:bg-red-500">
                    <div>FaQ</div>
                </a>
            </div>
        </footer>
    );
}
