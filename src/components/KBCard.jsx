// KBCard.jsx - Represents a single Knowledge Base card

function KBCard({ title, description, date }) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-5 w-full flex flex-col justify-between">

            {/* Top Content */}
            <div>
                <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-800">{title}</h3>
                    <span className="text-gray-400">⋮</span>
                </div>

                {/* Description (fixed height) */}
                <p className="text-sm text-gray-600 mt-2 leading-5 min-h-[60px]">
                    {description}
                </p>
            </div>

            {/* Bottom Section */}
            <div className="mt-4">
                <hr className="mb-3" />
                <p className="text-xs text-gray-500">Created On: {date}</p>
            </div>

        </div>
    )
}

export default KBCard