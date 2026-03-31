// App.jsx - Main container of our app
// We import components and arrange them here like puzzle pieces

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import KBCard from './components/KBCard'

function App() {
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
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <KBCard key={item} />
          ))}

        </div>

      </div>

    </div>
  )
}

export default App