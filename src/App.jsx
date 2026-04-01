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
      description: "Learn how to begin using the platform effectively and efficiently.",
      date: "12/07/2025"
    },
    {
      title: "API Guide",
      description: "Understand how to integrate APIs with practical examples and use cases.",
      date: "10/01/2026"
    },
    {
      title: "Authentication",
      description: "Implement secure login systems and manage user access control properly.",
      date: "08/02/2026"
    },
    {
      title: "Deployment",
      description: "Deploy your application smoothly using best practices and standard tools.",
      date: "25/02/2026"
    },
    {
      title: "Troubleshooting",
      description: "Identify common issues and apply effective solutions to resolve them quickly.",
      date: "02/03/2026"
    },
    {
      title: "Best Practices",
      description: "Follow clean coding standards and build scalable, maintainable applications.",
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
      
      <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>

        {/* Left side - Sidebar */}
        <Sidebar />

        {/* Right side - Main content (empty for now) */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

          {/* Navbar (top) */}
          <Navbar onCreateClick={openModal} />

          {/* Main Content (below navbar) */}
          <div style={{ padding: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>

            {/* Simulating data using array */}
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


      {isModalOpen && <CreateKBModal onClose={closeModal} />}

    </>
  )
}

export default App