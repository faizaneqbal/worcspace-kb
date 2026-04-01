// Navbar.jsx - Top bar of the application
// This will later contain search, buttons, etc.

function Navbar({ onCreateClick }) {
    return (
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-white">

            {/* Left - Title */}
            <h2 className="text-xl font-semibold text-gray-800">
                Knowledge Base
            </h2>

            {/* Right - Actions */}
            <div className="flex items-center gap-4">

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                {/* Create Button */}
                <button
                    onClick={onCreateClick}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
                >
                    + Create New
                </button>

            </div>

        </div>
    )
}

export default Navbar