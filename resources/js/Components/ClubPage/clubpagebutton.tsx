type ButtonProps = {
    label: string;
    onClick: () => void; // This is a callback function
    icon?: React.ReactNode;
};

export default function Clubpagebutton({ label, onClick, icon }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="inline-flex items-center bg-gray-200 text-2xl font-bold px-6 py-3 border border-gray-400 rounded-lg m-4 shadow-md hover:bg-gray-300"
        >
            {label}
            {icon && <span className="ml-2">{icon}</span>}
        </button>
    );
}
