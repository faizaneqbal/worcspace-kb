// App.jsx - Main container of our app
// We import components and arrange them here like puzzle pieces

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

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
  <div style={{ padding: '20px' }}>
    Main content coming here...
  </div>

</div>

    </div>
  )
}

export default App