// App.jsx - Main container of our app
// We import components and arrange them here like puzzle pieces

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import KBCard from './components/KBCard'

function App() {
  const kbData = [
    {
      title: "Getting Started",
      description: "Learn how to begin using the platform efficiently.",
      date: "12/07/2025"
    },
    {
      title: "API Guide",
      description: "Understand how to integrate APIs with examples.",
      date: "10/01/2026"
    },
    {
      title: "Authentication",
      description: "Steps to implement secure login and access control.",
      date: "08/02/2026"
    },
    {
      title: "Deployment",
      description: "Guide to deploy your application smoothly.",
      date: "25/02/2026"
    },
    {
      title: "Troubleshooting",
      description: "Common issues and how to fix them.",
      date: "02/03/2026"
    },
    {
      title: "Best Practices",
      description: "Tips to write clean and scalable code.",
      date: "31/03/2026"
    }
  ]
  return (
    // This div makes Sidebar and main content sit side by side
    <div style={{ display: 'flex', height: '100vh' }}>

      {/* Left side - Sidebar */}
      <Sidebar />

      {/* Right side - Main content (empty for now) */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Navbar (top) */}
        <Navbar />

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
  )
}

export default App