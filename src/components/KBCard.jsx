// KBCard.jsx - Represents a single Knowledge Base card

function KBCard({ title, description, date }) {
    return (
        <div className="w-[300px] bg-white border border-gray-200 rounded-lg p-4 shadow-sm">

            {/* Top section: Title + menu */}
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                    {title}
                </h3>
                <span className="text-gray-400 cursor-pointer">⋮</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-3">
                {description}
            </p>

            {/* Divider */}
            <hr className="border-t border-gray-200" />

            {/* Footer */}
            <p className="text-xs mt-3">
                <span className="text-gray-600">Created On: </span>
                <span className="text-gray-800">{date}</span>
            </p>

        </div>
    )
}

export default KBCard