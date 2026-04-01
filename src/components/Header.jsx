function Header() {
  return (
    <div className="bg-gradient-to-r from-indigo-950 via-indigo-800 to-indigo-950 text-white px-6 py-3 flex items-center justify-between">

      {/* Left Section */}
      <div className="flex items-center gap-3">
        <div className="font-bold text-lg">Workspace</div>

        <select className="bg-indigo-600 text-white text-sm px-2 py-1 rounded">
          <option>Workspace 1</option>
        </select>
      </div>

      {/* Center Search */}
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-[300px] px-3 py-1 rounded-md text-black text-sm"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <span>🔔</span>
        <div className="bg-white text-indigo-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
          GK
        </div>
      </div>

    </div>
  )
}

export default Header