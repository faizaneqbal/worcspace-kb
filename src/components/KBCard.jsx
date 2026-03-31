// KBCard.jsx - Represents a single Knowledge Base card

function KBCard() {
  return (
    <div style={{
      border: '1px solid #eee',
      borderRadius: '10px',
      padding: '16px',
      width: '300px',
      background: '#fff'
    }}>
      
      {/* Top section: Title + menu */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px'
      }}>
        <h3>Test</h3>
        <span>⋮</span>
      </div>

      {/* Description */}
      <p style={{
        fontSize: '14px',
        color: '#666',
        marginBottom: '10px'
      }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      {/* Divider */}
      <hr style={{ border: 'none', borderTop: '1px solid #eee' }} />

      {/* Footer */}
      <p style={{
        fontSize: '12px',
        color: '#999',
        marginTop: '10px'
      }}>
        Created On: 14/07/2025
      </p>

    </div>
  )
}

export default KBCard