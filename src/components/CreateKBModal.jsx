function CreateKBModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex z-50">

      {/* Overlay */}
      <div
        className="flex-1 bg-black bg-opacity-30"
        onClick={onClose}
      />

      {/* Right Panel */}
      <div className="w-[520px] bg-white h-full shadow-xl p-6 flex flex-col">

        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Create New Knowledge Base
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Best for quick answers from documents, websites and text files.
            </p>
            
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-lg"
          >
            ✕
          </button>
        </div>

        <div className="border-b border-gray-200 mt-4 mb-4 -mx-6"></div>

        {/* Form */}
        <div className="flex flex-col gap-5 flex-1">

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Name (Cannot be edited later)
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              placeholder="Description"
              rows={3}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Vector Store */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Vector Store <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 mt-1 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Qdrant</option>
            </select>
          </div>

          {/* LLM Model */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              LLM Embedding Model <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 mt-1 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>text-embedding-ada-002</option>
            </select>
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end mt-6">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md text-sm font-medium transition">
            Create
          </button>
        </div>

      </div>

    </div>
  )
}

export default CreateKBModal