// Navbar.jsx - Top bar of the application
// This will later contain search, buttons, etc.

function Navbar() {
  return (
    <div style={{
      padding: '20px',
      borderBottom: '1px solid #eee',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      
      {/* Left side - Title */}
      <h2>Knowledge Base</h2>

      {/* Right side - Placeholder for future actions */}
      <button>Create New</button>

    </div>
  )
}

export default Navbar