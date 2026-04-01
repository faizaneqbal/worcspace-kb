import { FiSearch } from "react-icons/fi"
import { AiOutlineAppstore } from "react-icons/ai"
import { FiBell } from "react-icons/fi"
import logo from '../assets/logo.svg'

function Header() {
    return (
        <div className="bg-gradient-to-r from-indigo-950 via-indigo-800 to-indigo-950 text-white px-6 py-3 flex items-center justify-between rounded-xl shadow-md">

            {/* Left Section */}
            <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-8 h-8 text-indigo-400" />
                <div className="font-bold text-lg">Worcspace</div>

                <select className="bg-indigo-600/70 text-white text-sm px-3 py-1 rounded-full outline-none">
                    <option>Worcspace 1</option>
                </select>
            </div>

            {/* Center Search */}
            {/* Center Search */}
            <div className="flex-1 flex justify-center">
                <div className="flex items-center bg-indigo-600/40 px-3 py-2 rounded-lg w-[320px]">

                    {/* 🔍 Left Icon */}
                    <FiSearch className="text-gray-300 mr-2 text-sm" />

                    {/* Input */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none text-white placeholder-gray-300 flex-1 text-sm"
                    />

                    {/* ⌘K Shortcut */}
                    <span className="text-xs text-gray-300 ml-2">⌘K</span>

                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                <FiBell className="text-white text-lg" />
                <div className="bg-white text-indigo-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                    GK
                </div>
            </div>

        </div>
    )
}

export default Header