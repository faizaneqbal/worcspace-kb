// Sidebar.jsx - This is the left navigation panel
// It shows all the menu items like Agents, AI Models etc.

function Sidebar() {
  return (
    <div style={{ width: '240px', height: '100vh', borderRight: '1px solid #eee', padding: '20px' }}>
      
      {/* MY PROJECTS section */}
      <p style={{ fontSize: '12px', color: '#999', marginBottom: '10px' }}>MY PROJECTS</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ padding: '8px 0' }}>Agents</li>
        <li style={{ padding: '8px 0' }}>AI Models</li>
        <li style={{ padding: '8px 0' }}>Library</li>
      </ul>

      {/* ORCHESTRATOR section */}
      <p style={{ fontSize: '12px', color: '#999', margin: '20px 0 10px' }}>ORCHESTRATOR</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ padding: '8px 0' }}>Published</li>
        <li style={{ padding: '8px 0' }}>Machines</li>
        <li style={{ padding: '8px 0' }}>Queues</li>
        <li style={{ padding: '8px 0' }}>Triggers</li>
        <li style={{ padding: '8px 0' }}>Jobs</li>
        <li style={{ padding: '8px 0' }}>Executions</li>
        <li style={{ padding: '8px 0' }}>Vault</li>
        <li style={{ padding: '8px 0', color: '#6366f1', fontWeight: 'bold' }}>Knowledge Base</li>
        <li style={{ padding: '8px 0' }}>Key Store</li>
      </ul>

      {/* ADMIN section */}
      <p style={{ fontSize: '12px', color: '#999', margin: '20px 0 10px' }}>ADMIN</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ padding: '8px 0' }}>Tenant</li>
        <li style={{ padding: '8px 0' }}>Integrations</li>
      </ul>

    </div>
  )
}

export default Sidebar