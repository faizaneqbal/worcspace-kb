// Sidebar.jsx - This is the left navigation panel
// It shows all the menu items like Agents, AI Models etc.
import {
  FiBox,
  FiCpu,
  FiBook,
  FiUpload,
  FiMonitor,
  FiServer,
  FiZap,
  FiBriefcase,
  FiPlay,
  FiShield,
  FiDatabase,
  FiUsers,
  FiSettings
} from "react-icons/fi"


function Sidebar() {
  return (
    <div className="w-[240px] h-screen border-r border-gray-200 px-5 py-5">

      {/* MY PROJECTS */}
      <p className="text-xs text-gray-400 mb-3">MY PROJECTS</p>
      <ul className="space-y-2">
        <li className="flex items-center gap-3 text-gray-600">
          <FiBox /> Agents
        </li>
        <li className="flex items-center gap-3 text-gray-600">
          <FiCpu /> AI Models
        </li>
        <li className="flex items-center gap-3 text-gray-600">
          <FiBook /> Library
        </li>
      </ul>

      {/* ORCHESTRATOR */}
      <p className="text-xs text-gray-400 mt-6 mb-3">ORCHESTRATOR</p>
      <ul className="space-y-2">
        <li className="flex items-center gap-3 text-gray-600">
          <FiUpload /> Published
        </li>
        <li className="flex items-center gap-3 text-gray-600">
          <FiMonitor /> Machines
        </li>
        <li className="flex items-center gap-3 text-gray-600">
          <FiServer /> Queues
        </li>
        <li className="flex items-center gap-3 text-gray-600">
          <FiZap /> Triggers
        </li>
        <li className="flex items-center gap-3 text-gray-600">
          <FiBriefcase /> Jobs
        </li>
        <li className="flex items-center gap-3 text-gray-600">
          <FiPlay /> Executions
        </li>
        <li className="flex items-center gap-3 text-gray-600">
          <FiShield /> Vault
        </li>

        {/* ACTIVE ITEM */}
        <li className="flex items-center gap-3 bg-indigo-100 text-indigo-600 px-3 py-2 rounded-md font-medium">
          <FiBook /> Knowledge Base
        </li>

        <li className="flex items-center gap-3 text-gray-600">
          <FiDatabase /> Key Store
        </li>
      </ul>

      {/* ADMIN */}
      <p className="text-xs text-gray-400 mt-6 mb-3">ADMIN</p>
      <ul className="space-y-2">
        <li className="flex items-center gap-3 text-gray-600">
          <FiUsers /> Tenant
        </li>
        <li className="flex items-center gap-3 text-gray-600">
          <FiSettings /> Integrations
        </li>
      </ul>

    </div>
  )
}

export default Sidebar