// App.jsx - Main container of our app
// We import components and arrange them here like puzzle pieces
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import KBCard from './components/KBCard'
import CreateKBModal from './components/CreateKBModal'
import Header from './components/Header'
function App() {
  const kbData = [
    {
      title: "Getting Started",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      date: "12/07/2025"
    },
    {
      title: "API Guide",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      date: "10/01/2026"
    },
    {
      title: "Authentication",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      date: "08/02/2026"
    },
    {
      title: "Deployment",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      date: "25/02/2026"
    },
    {
      title: "Troubleshooting",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      date: "02/03/2026"
    },
    {
      title: "Best Practices",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      date: "31/03/2026"
    }
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)



  return (
    //This div makes Sidebar and main content sit side by side
    <>
      {/* Header Wrapper (matches Figma spacing) */}
      <div className="bg-gray-100 px-3 pt-3">
        <Header />
      </div>

      <div className="flex h-[calc(100vh-60px)]">

        {/* Left side - Sidebar */}
        <Sidebar />

        {/* Right side - Main content (empty for now) */}
        <div className="flex-1 flex flex-col">

          {/* Navbar (top) */}
          <Navbar onCreateClick={openModal} />

          {/* Main Content (below navbar) */}
          {/* Main Content */}
          <div className="p-6 flex-1 flex flex-col">

            {/* Cards Container Box */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {kbData.map((item, index) => (
                  <KBCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                  />
                ))}
              </div>

            </div>

          </div>

          {/* ✅ Footer / Pagination (NOW CORRECT POSITION) */}
          <div className="mt-auto flex items-center justify-between px-6 py-4 text-sm text-gray-600 border-t border-gray-200">

            {/* Left */}
            <div className="font-medium text-gray-700">6 rows</div>

            {/* Right */}
            <div className="flex items-center gap-6">

              {/* Rows per page */}
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Rows per page</span>
                <select className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-white">
                  <option>10</option>
                  <option>20</option>
                </select>
              </div>

              {/* Page info */}
              <div className="font-medium text-gray-700">
                page 1 of 1
              </div>

              {/* Pagination */}
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-400">{'<<'}</button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-400">{'<'}</button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-400">{'>'}</button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md text-gray-400">{'>>'}</button>
              </div>

            </div>
          </div>



        </div>

      </div>


      {isModalOpen && <CreateKBModal onClose={closeModal} />}

    </>
  )
}

export default App