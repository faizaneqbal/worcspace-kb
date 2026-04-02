// Navbar.jsx - Top bar of the application
// This will later contain search, buttons, etc.
import { FiSearch, FiPlus } from "react-icons/fi"
function Navbar({ onCreateClick }) {
    return (
        <div className="flex justify-between items-center px-6 py-4 border-gray-200 bg-white">

            {/* Left - Title */}
            <h2 className="text-xl font-semibold text-gray-800">
                Knowledge Base
            </h2>

            {/* Right - Actions */}
            <div className="flex items-center gap-4">

                {/* Search Input */}
                <div className="relative">
                    {/* Search Icon */}
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                    {/* Input */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                {/* Create Button */}
                <button
                    onClick={onCreateClick}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition"
                >
                    <FiPlus className="text-sm" />
                    Create New
                </button>

            </div>

        </div>
    )
}

export default Navbar